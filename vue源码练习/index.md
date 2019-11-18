## 下面代码的输出是什么? ##

    console.log(a) // undefined
    var a = 1;
    var getNum = function(){
      a = 2;
    }  
    function getNum(){
      a = 3;
    }
    console.log(a) // 1
    getNum()
    console.log(a) // 2
    

>var在创建阶段会被提升，所以console.log打印的时候；<br>
>js创建变量为其分配内存，默认值为undefined；直到我们实际执行到该变量的行。<br>
>我们还没有为a变量赋值，所以它依然保持undefined。<br>
>所以第一个console.log(a) 打印undefined。<br>
>这里补充一点如果打印的不是a是name或者length的话就不是undefined

    console.log(name)  // ""
    console.log(length)  // 0 


>在打印第二个console.log(a)之前两个函数都没有被调用，变量a的值为1； 打印1


>js中有两种函数，一种是普通函数、一种是函数对象，它实际上是声明一个匿名函数然后将函数的初始化方法赋值给该变量。

    function fn(){
        return 'function'
    }
    var fn = function(){
        return 'function'
    }

### 变量名与函数重名的时候、变量生效 ###

>这涉及到变量和函数的预解析、变量声明会被顶置，函数声明会被顶置且比变量更先声明。
>变量的声明和赋值语句一起写时，js引擎在解析时，会将其拆分成声明和赋值两部分声明置顶，赋值保留在原来的位置，声明过得变量不会再重复声明。
>所以在最后console.log(a)打印之前执行的函数对象getNum,
window.a被赋值为2；打印2




### 那么当函数名与内部变量重名会怎样呢? ###


    function a() {
      console.log(this) // window
      this.a = 1;
      var a = 5;
      a = 10;
      var val = 'value';
      return "function"
    }
    console.log(a) // function a()
    console.log(a()) //  "function"
    console.log(a) // 1
    console.log(val) // val is not defined 报错不会再往下执行
    console.log(a) // 
    console.log(a()) // 

>定义普通函数，即window变量下，定义key他的名字为该函数名，值为该函数的地址、函数内部的this指向window对象
>所以第一个console.log(this)打印window对象
>接下来console.log(a) 打印函数a
>console.log(a()) 打印函数返回值 字符串function
>函数a被执行 window.a被赋值为1，不再是函数。



