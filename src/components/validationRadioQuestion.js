import { Formik, Field, Form } from "formik";
import CardBatchForm from "../pages/formPages/cardBatchForm";
import SingleCardForm from "../pages/formPages/singleCardForm";

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
          <div role="group" id="radio-question-group">
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
          
          {values.firstQuestRadio === "single-card" ? <SingleCardForm /> : null}

          {values.firstQuestRadio === "card-batch" ?  <CardBatchForm /> : null}
        </div>
      )}
      
    </Formik>
  );
};

export default RenderFirstRadioQuestion;
