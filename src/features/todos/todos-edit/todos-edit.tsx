import { Fragment } from "react";
import { Button } from "../../ui/button/button";
import iconCheck from "./../../../assets/images/icon-check.svg";

type TodosEditProps = {
  isCompleteState: boolean;
  changeCompleteState: () => void;
};

export const TodosEdit = ({
  isCompleteState,
  changeCompleteState,
}: TodosEditProps) => {
  return (
    <div>
      <Button
        type="button"
        classNames={[
          "btn",
          "btn--edit",
          `${isCompleteState && "btn--complete"}`,
        ]}
        onClick={changeCompleteState}
      >
        {isCompleteState ? (
          <img src={iconCheck} alt="Complete todo" />
        ) : (
          <Fragment>&nbsp;</Fragment>
        )}
      </Button>
    </div>
  );
};
