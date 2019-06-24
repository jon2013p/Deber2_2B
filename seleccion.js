var arreglo=[];
var n;
function menuPrincipal()
{
    
 
    do{
        var op=parseInt(prompt(
            ` Ingrese la opcion deseada:
            1.- Para ingresar elementos
            2.- para mostrar elementos
            3.- Para ordenar los elementos
            4.- Mayor y Menor elemento
            5.- Para salir
            `))

    
    switch(op){

        case 1: 
            console.log("Bienvenido al caso 1 ");
            n = parseInt(prompt("Ingrese el tamaño: "));
            ingresar(arreglo,n);
            break;
        case 2: 
            console.log("Bienvenido al caso 2 ");
            console.log(arreglo);
            break;
        case 3: 
            console.log("Bienvenido al caso 3 ");
            var ord=parseInt(prompt(
            `
            Pulse 1 si desea que el arreglo sea ordenado por Burbuja 
            Pulse 2 si desea que el arreglo sea ordenado por Selección`));
            if(ord==1)
            {
                burbuja(arreglo,n);
                console.log(arreglo);

            }else{
                selección(arreglo,n);
                console.log(arreglo);

            }

            break;
        case 4: 
            console.log("Bienvenido al caso 4 ");
            console.log("el minimo es: "+arreglo[0]+ "el maximo es: "+ arreglo[n-1])
            break;
        default: 
            console.log("Opcion incorrecta");
            break;

    }
    }while(op!=5)
}

menuPrincipal();

function ingresar(arreglo,n)
{
    for(var k =0;k<n;k++)
    {
        var datos = parseInt(prompt("Ingresa los elementos "));
        arreglo[k]=datos;  
    }
}

function burbuja(arreglo,n)
{

    var i, k ,aux;
    for(k=1; k<n;k++){
        for(i=0; i <(n-k);i++){
            if(arreglo[i]>arreglo[i +1]){
                aux=arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i+1]=aux;
            }
        }
    }
}

function selección(arreglo,n)
{

    for(var i=0;i<n;i++)
    {
        for(var j=i+1; j<n; j++){

            if(arreglo[i]>arreglo[j])
            {

                var aux=arreglo[i];
                arreglo[i]=arreglo[j];
                arreglo[j]=aux;
            }
        }
    }
}
