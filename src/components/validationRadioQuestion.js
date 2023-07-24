import { Formik, Field, Form } from "formik";
import SingleCardForm from "../pages/formPages/singleCardForm";
import CardBatchForm from "./cardBatchForm";

const RenderFirstRadioQuestion = () => {

  return (
    <Formik
      initialValues={{
        firstQuestRadio: "",
      }}
    >
      {({ values }) => (
        <div className="radio-form">
          <div id="my-radio-group">
            <p>What would you like to validate?</p>
          </div>
          <div role="group">
            <div className="radio-button-and-label">
              <label>
                <Field
                  type="radio"
                  name="firstQuestRadio"
                  id="single-card-radio"
                  value="single-card"
                />
                Validate Single Card Number
              </label>
            </div>
            <div className="radio-button-and-label">
              <label>
                <Field
                  type="radio"
                  name="firstQuestRadio"
                  id="batch-cards-radio"
                  value="card-batch"
                />
                Validate Batch of Card Numbers
              </label>
            </div>
          </div>
          
          {values.firstQuestRadio === "single-card" ? <SingleCardForm /> : <CardBatchForm />}
        </div>
      )}
      
    </Formik>
  );
};

export default RenderFirstRadioQuestion;
