function bishbosh()
{
    console.clear();
    let x = parseInt(document.getElementById('X').value);
    let y = parseInt(document.getElementById('Y').value);
    let n = parseInt(document.getElementById('N').value)+1;
    let runProgram = true;

    if (x < 0 || isNaN())
    {
        runProgram = false;
        document.getElementById("Output").innerHTML = "Enter valid input";
    }
    if (y < 0 || isNaN())
    {
        runProgram = false;
        document.getElementById("Output").innerHTML = "Enter valid input";
    }
    if (n < 0 || isNaN())
    {
        runProgram = false;
        document.getElementById("Output").innerHTML = "Enter valid input";
    }
    if (x > 0 && y > 0 && n > 0)
    {
        runProgram = true;
    }

    if (runProgram)
    {
        document.getElementById("Output").innerHTML = "";
        for (let i = 1; i < n; i++) 
        {
            if (i % x == 0 && i % y == 0)
            {
                let text = document.getElementById("Output");
                let addText = document.createTextNode("Bish-Bosh ");
    
                text.appendChild(addText);
            }
            else if (i % x == 0)
            {
                let text = document.getElementById("Output");
                let addText = document.createTextNode("Bish ");
    
                text.appendChild(addText);
            }
            else if (i % y == 0)
            {
                let text = document.getElementById("Output");
                let addText = document.createTextNode("Bosh ");
    
                text.appendChild(addText);
            }
            else
            {
                let text = document.getElementById("Output");
                let addText = document.createTextNode(i + "\n");
    
                text.appendChild(addText);
            }
        }
    }
    

}


