import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

function ProgressSemiCircularBar() {
  return (
    <div className="flex items-center justify-center mt-5">
      <SemiCircleProgressBar
        diameter={500}
        strokeWidth={30}
        percentage={65}
        showPercentValue
      />
    </div>
  );
}

export default ProgressSemiCircularBar;
