
const closeDivs = [true, true, true, true];
const pArray = document.getElementsByClassName('paragrafo');
const imgArray = document.getElementsByClassName('imgMinusPlus');


function closeOtherDivs(divAtual){
    for(let i = 0; i <= 3; i++){
        if(i != divAtual){
            if(!closeDivs[i]){
                pArray[i].style.maxHeight = '0px'
                pArray[i].style.margin = '0px 0px 0px 0px';
                imgArray[i].src = 'assets/images/icon-plus.svg';
                closeDivs[i] = true;
            }
        }
    }
}

function openDiv(numDiv){
    switch(numDiv){
        case 0:
            if(closeDivs[0]){
                pArray[0].style.maxHeight = '100px';
                pArray[0].style.margin = '0px 0px 30px 0px';
                imgArray[0].src = 'assets/images/icon-minus.svg';
                closeOtherDivs(0);
                closeDivs[0] = false;
            }else{
                pArray[0].style.maxHeight = '0px'
                pArray[0].style.margin = '0px 0px 0px 0px';
                imgArray[0].src = 'assets/images/icon-plus.svg';
                closeDivs[0] = true;
            }
            break;
        case 1:
            if(closeDivs[1]){
                pArray[1].style.maxHeight = '100px'
                pArray[1].style.margin = '0px 0px 30px 0px';
                imgArray[1].src = 'assets/images/icon-minus.svg';
                closeOtherDivs(1);
                closeDivs[1] = false;
            }else{
                pArray[1].style.maxHeight = '0px'
                pArray[1].style.margin = '0px 0px 0px 0px';
                imgArray[1].src = 'assets/images/icon-plus.svg';
                closeDivs[1] = true;
            } 
            break;
        case 2:
            if(closeDivs[2]){
                pArray[2].style.maxHeight = '100px'
                pArray[2].style.margin = '0px 0px 30px 0px';
                imgArray[2].src = 'assets/images/icon-minus.svg';
                closeOtherDivs(2);
                closeDivs[2] = false;
            }else{
                pArray[2].style.maxHeight = '0px'
                pArray[2].style.margin = '0px 0px 0px 0px';
                imgArray[2].src = 'assets/images/icon-plus.svg';
                closeDivs[2] = true;
            } 
            break;
        case 3:
            if(closeDivs[3]){
                pArray[3].style.maxHeight = '100px'
                pArray[3].style.margin = '0px 0px 30px 0px';
                imgArray[3].src = 'assets/images/icon-minus.svg';
                closeOtherDivs(3);
                closeDivs[3] = false;
            }else{
                pArray[3].style.maxHeight = '0px'
                pArray[3].style.margin = '0px 0px 0px 0px';
                imgArray[3].src = 'assets/images/icon-plus.svg';
                closeDivs[3] = true;
            } 
            break;
        default:
            alert(`no parameters`);
            break
    }
    

    

}