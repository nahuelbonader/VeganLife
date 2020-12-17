export const toggleButton = (execFn, set1, set2, set3, val1, val2, val3) => {
  if (execFn == set1 ){
    execFn(!val1);
     if(val2) set2(false)
     if(val3) set3(false)
  }
  if (execFn == set2){
    execFn(!val2);
     if(val1) set1(false)
     if(val3) set3(false)
  }
  if (execFn == set3){
    execFn(!val3)
     if(val1) set1(false)
     if(val2) set2(false)
  }
}
