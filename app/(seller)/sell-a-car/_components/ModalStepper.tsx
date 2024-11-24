'use client';

import React, { useState } from 'react';
import VehicleEvaluation from './VehicleEvaluation';
import VehicleEstimation from './VehicleEstimation';

const ModalStepper = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  return (
    <div>
      {selectedComponent === 1 && (
        <VehicleEvaluation vehicleEvaluation={() => setSelectedComponent(2)} />
      )}
      {selectedComponent === 2 && (
        <VehicleEstimation vehicleEstimate={() => setSelectedComponent(1)} />
      )}
    </div>
  );
};

export default ModalStepper;
