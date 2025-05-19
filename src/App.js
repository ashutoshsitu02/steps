import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step >= 2) {
      setSteps((s) => s - 1);
    }
  };

  const handleNext = () => {
    if (step <= 2) {
      setSteps((s) => s + 1);
    }
  };

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((preState) => !preState)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <h4 className="message" style={{ textAlign: "center" }}>
            Step {step}: {messages[step - 1]}
          </h4>

          <div className="buttons">
            <Button
              bgColor={"7950f2"}
              color={"fff"}
              clickHandle={handlePrevious}
            >
              Previous
            </Button>

            <Button bgColor={"7950f2"} color={"fff"} clickHandle={handleNext}>
              Next <span>→</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const Button = ({ bgColor, color, clickHandle, children }) => {
  return (
    <button
      style={{ backgroundColor: { bgColor }, color: { color } }}
      onClick={clickHandle}
    >
      {children}
    </button>
  );
};

export default App;
