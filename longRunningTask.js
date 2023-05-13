function startLongRunningTaskExecution() {
    const start_time = performance.now();
    // Simulate long-running execution with a loop and block load event
    const iterations = 300000000; // Large number of iterations
    //console.profile();
    for (var i = 0; i < iterations; i++) {
      // Simulated long-running code
      // on Mac M1 Chip 300000000 iterations ~= 150ms
    }
    //console.profileEnd();

    outputMessage(
      `long running JS execution in function duration: ${
        performance.now() - start_time
      }`
    );
  }

startLongRunningTaskExecution();