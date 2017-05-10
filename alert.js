



nextStep: for ( var simple = 2 ; simple < 10; simple++;) {
    for ( var example = 2; example <=10; example++) {
         if (simple % example==0) continue nextStep;
    }

    console.log(simple)
}