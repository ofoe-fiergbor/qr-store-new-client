import React from "react";

const useMigration = () => {
  const [localStage, setLocalStage] = React.useState(0);

  const stages = ["LOGIN", "REGISTER"];

  const onBackPress = () => {
    if (localStage > 0) setLocalStage(localStage - 1);

    return true;
  };

  const swap = (delta) => {
    if (localStage + 1 < stages.length) {
      const _stage = localStage + delta;

      setLocalStage(_stage);
    } else {
      setLocalStage(0);
    }
  };

  return [swap, onBackPress, stages, localStage];
};

export default useMigration;
