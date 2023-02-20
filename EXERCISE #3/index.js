// Dengan menggunakan modul buatlah 2 buah fungsi:
// # 1 (Export)
// # Untuk mengkonversi suhu dari fahrenheit ke celcius
// # Tampilkan dengan contoh format : 99.20 Fahrenheit = 37.33 Celcius

// # 2 (Export Default)
// # Untuk menghitung BMI (Body Mass Index)
// # Rumus : BMI = berat / (tinggi * tinggi), berat dalam kg dan tinggi dalam meter
// # Tampilkan juga hasil BMI termasuk kategori apa (Obesitas, dst)

//1.Export : Fahrenheit to Celcius
export function convertFahrenheitToCelcius(ftemp=99.20){
    var ctemp = Math.abs(5/9*(ftemp-32));
    console.log(`${ftemp}Fahrenheit = ${ctemp}Celcius`);
}



//2.Export Default : BMI
export default function BMI()
{
    var weight = parseFloat(beriNilai("weight").value);  
    var height = parseFloat(beriNilai("height").value)/100; 
    var b = weight/(height*height);  
    beriNilai("ans").value = String(b.toPrecision(3)) +" kg/m^2";
    if (b < 18.5)
    {
        beriNilai("category").value = "Underweight";
    }
    else if (b >= 18.5 && b <= 25)
    {
        beriNilai("category").value = "Healthy weight";
    }
    else if (b > 25 && b <= 30)
    {
        beriNilai("category").value = "Overweight";
    }
    else if (b > 30 && b <= 35)
    {
        beriNilai("category").value = "Obesitas Kelas 1";
    }
    else if(b > 35 && b <= 40)
    {
        beriNilai("category").value = "Obesitas Kelas 2";
    }
    else
    {
        beriNilai("category").value = "Obesitas Kelas 3";
    }
}


