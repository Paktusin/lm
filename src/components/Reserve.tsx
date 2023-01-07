import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Reserve.scss";

export const OCCASIONS = [
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "engagement", label: "Engagement" },
];

interface IReserveProps {}

export const Reserve: React.FC<IReserveProps> = (props) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { errors, handleChange, values, handleSubmit } = useFormik<any>({
    initialValues: {},
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Date is required")
        .min(new Date(), "Date cannot be in the past"),
      time: Yup.string().required("Time is rquired"),
      guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "Minimum 1 guest required")
        .max(10, "Guests should not exceed 10"),
      occasion: Yup.string().required("Occasion is rquired"),
    }),
    onSubmit: (values) => {
      alert("successfully reserved");
      formRef.current?.reset();
    },
  });

  const controls: {
    name: string;
    type?: string;
    render?: React.ReactElement;
  }[] = [
    { name: "date", type: "date" },
    { name: "time", type: "time" },
    { name: "guests", type: "number" },
    {
      name: "occasion",
      render: (
        <select name="occasion" value={values.occasion} onChange={handleChange}>
          {OCCASIONS.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <section className="reserve container">
      <form data-testid="reserve-form" ref={formRef} onSubmit={handleSubmit}>
        {controls.map((control, index) => (
          <div className="control" key={index}>
            <label>{control.name}</label>
            {control.render || (
              <input
                type={control.type}
                name={control.name}
                onChange={handleChange}
              />
            )}
            <span className="error" role="error">
              {(errors as any)[control.name]}
            </span>
          </div>
        ))}

        <button role="submit" className="btn" type={"submit"}>
          Reserve
        </button>
      </form>
    </section>
  );
};
