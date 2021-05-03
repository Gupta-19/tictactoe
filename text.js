var a= new Array();
a[0]=document.getElementById("open0");
a[1]=document.getElementById("open1");
a[2]=document.getElementById("open2");
a[3]=document.getElementById("open3");
a[4]=document.getElementById("open4");
a[5]=document.getElementById("open5");
a[6]=document.getElementById("open6");
a[7]=document.getElementById("open7");
a[8]=document.getElementById("open8");
var f = document.getElementsByTagName("p");
var l= new Array();
var m = new Array();
var lfac =0;
var mfac=0;
var count=0;
var s;
var e=0;
var k=0;
var flag=0;
for(i=0;i<9;i++)
{
 a[i].onclick = function(){
    if((k%2)==0)
    {
        a[i].textContent="X";
        l[lfac]=a[i].value;
        lfac+=1;
        k+=1;
    }
    else
    {
        a[i].textContent="O";
        m[mfac]=a[i].value;
        mfac++;
        k++;
    }
    for(g=2;g<5;g++)
        {
            for(y=1;y<g;y++)
            {
                for(z=0;z<y;z++)
                {
                    s=0;
                    s=l[z]+l[y]+l[g];
                    if(s==45)
                    {
                        break;
                    }
                
            }
            if(s==45)
            {
                break;
            }
        }
        if(s==45)
        {
            break;
        }
    }
    for(b=2;b<4;b++)
    {
        for(c=1;c<b;c++)
        {
            for(d=0;d<c;d++)
            {
                e=0;
                e=m[b]+m[c]+m[d];
                if(e==45)
                {
                    break;
                }
                
            }
            if(e==45)
            {
                break;
            }
        }
        if(e==45)
        {
            break;
        }
    }
    if(s==45)
    {
        f[0].textContent="CONGRATULATIONS";
        for(t=0;t<9;t++)
        {
            if(a[t].value==l[z]||a[t].value==l[y]||a[t].value==l[k])
            {
                a[t].class="nrow";
            }
        }
    }
    else if(e==45)
    {
        f[0].textContent="CONGRATULATIONS";
        for(u=0;u<9;u++)
        {
            if(a[u].value==m[b]||a[u].value==m[c]||a[u].value==m[d])
            {
                a[u].class="nrow";
            }
        }
    } 
 };  
}
        
if(s==45||e==45)
{}
else
{
    f[0].textContent="it's a tie";
}