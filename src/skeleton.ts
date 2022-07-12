

/**
 * 
 * @param hexString accepts string showing hex value
 * @returns object containg key value pairs  
 */
function hexStringToRGB(hexString : string) : object  {

  const decimal : string[] =  ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
  const hex : string[] =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

  const RGB : any[] = []

  interface solution {
    r: string;
    g: string;
    b: string;
  }

  let solution : solution 


  hexString = hexString.replace(/#/gi, '').toUpperCase()

  const red : string[] = hexString.substring(0,2).split("")
  const green : string[] = hexString.substring(2,4).split("")
  const blue : string[] = hexString.substring(4,6).split("")
  const colours  = [red,green,blue]

  colours.forEach(element =>{
    
    let firstValue : string = decimal[hex.indexOf(element[0])]
    //console.log(firstValue)
    let secondValue : string = decimal[hex.indexOf(element[1])]
    //console.log(secondValue)
    
    let result : number = Number(firstValue*16) + Number(secondValue)
  
    RGB.push(result)
    
  })



  return solution

}

export default hexStringToRGB;