
//function for calculating the area of Triangle, Rhombus and Pentagon
function calculateAreaOfTriRomPen(input1,input2){

    let area=0.5*input1*input2;
    return area;

}
//function for calculating the area of Reactangle and Parallelogram

function calculateAreaOfRecPara(input1, input2){
    let area=input1*input2;
    return area;
}

//Input area of Triangle

document.getElementById('traingle-button').addEventListener('click',function(){

    const baseInputField=document.getElementById('traingle-base-field');
    const baseInputFieldString=baseInputField.value;
    const baseInput=parseFloat(baseInputFieldString);
    console.log(baseInput);

    const heightInputField=document.getElementById('traingle-height-field');
    const heightInputFieldString=heightInputField.value;
    const heightInput=parseFloat(heightInputFieldString);
    console.log(heightInput);

    const areaOfTri=calculateAreaOfTriRomPen(baseInput,heightInput);

    const areaField=document.getElementById('area-field');
    areaField.innerText=areaOfTri;


})

//Input area of Rectangle
document.getElementById('rectangle-button').addEventListener('click',function(){

    const widthInputField=document.getElementById('rectangle-width-field');
    const widthInputFieldString=widthInputField.value;
    const widthInput=parseFloat(widthInputFieldString);
    console.log(widthInput);

    const lengthInputField=document.getElementById('rectangle-length-field');
    const lengthInputFieldString=lengthInputField.value;
    const lengthInput=parseFloat(lengthInputFieldString);
    console.log(lengthInput);

    const areaOfRec=calculateAreaOfRecPara(widthInput,lengthInput);

    const areaField=document.getElementById('area-field');
    areaField.innerText=areaOfRec;


})

//Input area of Parallelogram

document.getElementById('parallelogram-button').addEventListener('click',function(){
    const baseInputField=document.getElementById('parallelogram-base-text');
    const baseInputString=baseInputField.value;
    const baseInput=parseFloat(baseInputString);

    const heightInputField=document.getElementById('parallelogram-height-text');
    const heightInputString=heightInputField.value;
    const heightInput=parseFloat(heightInputString);

    const areaOfPara=calculateAreaOfRecPara(baseInput,heightInput);

    const areaField=document.getElementById('area-field');
    areaField.innerText=areaOfPara;
    
})

//Input area of Rhombus
document.getElementById('rhombus-button').addEventListener('click',function(){

    const d1InputField=document.getElementById('rhombus-d1-field');
    const d1InputFieldString=d1InputField.value;
    const d1Input=parseFloat(d1InputFieldString);
    console.log(d1Input);

    const d2InputField=document.getElementById('rhombus-d2-field');
    const d2InputFieldString=d2InputField.value;
    const d2Input=parseFloat(d2InputFieldString);
    console.log(d2Input);

    const areaOfRom=calculateAreaOfTriRomPen(d1Input,d2Input);

    const areaField=document.getElementById('area-field');
    areaField.innerText=areaOfRom;


})

//Input area of Pentagon
document.getElementById('pentagon-button').addEventListener('click',function(){

    const pInputField=document.getElementById('pentagon-p-field');
    const pInputFieldString=pInputField.value;
    const pInput=parseFloat(pInputFieldString);
    console.log(pInput);

    const bInputField=document.getElementById('pentagon-b-field');
    const bInputFieldString=bInputField.value;
    const bInput=parseFloat(bInputFieldString);
    console.log(bInput);

    const areaOfPen=calculateAreaOfTriRomPen(pInput,bInput);

    const areaField=document.getElementById('area-field');
    areaField.innerText=areaOfPen;


})

//Input area of ellipse
document.getElementById('ellipse-button').addEventListener('click',function(){

    const aInputField=document.getElementById('ellipse-a-field');
    const aInputFieldString=aInputField.value;
    const aInput=parseFloat(aInputFieldString);
    console.log(aInput);

    const bInputField=document.getElementById('ellipse-b-field');
    const bInputFieldString=bInputField.value;
    const bInput=parseFloat(bInputFieldString);
    console.log(bInput);

    const calculateAreaOfEllipse=3.1416*aInput*bInput;

    const areaField=document.getElementById('area-field');
    areaField.innerText=calculateAreaOfEllipse;


})