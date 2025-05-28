/** @format */
import { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import "./handover.scss";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMachineList,
  setActiveMachine,
} from "../../redux/slices/machineSlice";
import { updateHandoverData } from "../../redux/slices/handoverSlice";

export function Handover() {
  const dispatch = useDispatch();
  const { machineList, activeMachine, loading, error } = useSelector(
    (state) => state.machines
  );
  const handoverData = useSelector((state) => state.handover.handoverData);

  useEffect(() => {
    if (machineList.length === 0 && !loading) {
      dispatch(fetchMachineList());
    }
  }, [dispatch, machineList.length, loading]);

  const validationSchema = Yup.object().shape({
    status: Yup.string()
      .oneOf(["ok", "nok"], "Välj en giltig status")
      .required("Maskin status krävs"),
    comment: Yup.string().when("status", (status, schema) =>
      status === "nok"
        ? schema.required("Maskin status är NOK, kommentaren krävs")
        : schema.notRequired()
    ),
  });

  return (
    <div className="handoverContainer">
      <h1 className="handoverTitle">Överlapp</h1>
      {machineList.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="handoverContent">
          {activeMachine && (
            <Formik
              initialValues={{
                status: handoverData[activeMachine.id]?.status ?? "",
                comment: handoverData[activeMachine.id]?.comment ?? "",
              }}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                window.appModel.saveHandoverReport(handoverData);
              }}
            >
              {({ errors, touched, values, setFieldValue }) => {
                useEffect(() => {
                  if (activeMachine) {
                    setFieldValue(
                      "status",
                      handoverData[activeMachine.id]?.status || ""
                    );
                    setFieldValue(
                      "comment",
                      handoverData[activeMachine.id]?.comment || ""
                    );
                  }
                }, [activeMachine, setFieldValue, handoverData]);

                return (
                  <Form
                    className={`machineStatusForm ${
                      values.status === "ok"
                        ? "ok-selected"
                        : values.status === "nok"
                        ? "nok-selected"
                        : ""
                    }`}
                  >
                    <div className="handoverHead">
                      <div className="machineInfo">
                        <p className="machineName">{activeMachine.name}</p>
                        <p className="machineId">SV: {activeMachine.id}</p>
                      </div>

                      <div className="machineState">
                        <label>Status</label>
                        <Field
                          as="select"
                          name="status"
                          onChange={(e) => {
                            const value = e.target.value;
                            setFieldValue("status", value);
                            dispatch(
                              updateHandoverData({
                                machineId: activeMachine.id,
                                field: "status",
                                value,
                              })
                            );
                          }}
                        >
                          <option value="">Välj status</option>
                          <option value="ok">OK</option>
                          <option value="nok">NOK</option>
                        </Field>
                        {errors.status && touched.status && (
                          <div className="error">{errors.status}</div>
                        )}
                      </div>
                    </div>
                    <div className="machineHandoverInfo">
                      <label>Överlapp text</label>
                      <Field
                        type="text"
                        name="comment"
                        onChange={(e) => {
                          const value = e.target.value;
                          setFieldValue("comment", value);
                          dispatch(
                            updateHandoverData({
                              machineId: activeMachine.id,
                              field: "comment",
                              value,
                            })
                          );
                        }}
                      />
                      {errors.comment && touched.comment && (
                        <div className="error">{errors.comment}</div>
                      )}
                    </div>

                    {/* Virtual Keyboard Placeholder */}
                    <div className="virtualKeyboardPlaceholder"></div>

                    {/* Submit Button */}
                    <button type="submit" className="submitButton">
                      Skicka Rapport
                    </button>
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      )}
    </div>
  );
}
