先用一个简单的 Person 类作为文章其它例子的前提。

{% highlight javascript %}
function Person() {
	this.name = "StrayBugs";
	this.age = 22;
}

Person.prototype.sayName = function() {
	alert(this.name);
};
{% endhighlight %}

JavaScript 中实现继承第一个方法是利用原型链。

可以这么理解，继承就是要让子类获得父类的属性和方法。原型链的思路是利用原型共享的特点，让子类的原型变成父类的一个实例，父类的实例必然包括了父类的属性与方法，那么子类的所有实例都可以通过原型链一层层找到父类了。

新手（比如我）可能会在这里混淆，请分析出下面三种代码的原型与实例，先不要看下面的答案自己想。

{% highlight javascript %}
function Man() {
	
}

//第一种
Man.prototype = Person;
var man = new Man();

//第二种
Man.prototype = Person();
var man = new Man();

//第三种
Man.prototype = new Person();
var man = new Man();
{% endhighlight %}

第一种：`Man.prototype` 获得的是 `Person` 函数的指针，也就是说，`Man.prototype` 就是 `Person` 函数。这里没有任何调用 `Man.prototype` 的代码，且 `Man` 是个空函数，所以其实例 `man` 的内部属性 `[[prototype]]` 值指向 `Person` 函数。

![sen1]()

第二种：构造函数本质也是函数。`Person()` 相当于执行了函数将返回值赋给原型。因为 `Person()` 没有 `return`，故返回值为 `undefined`，于是代码等价于 `Man.prototype = undefined;`，所以 `man` 的 `[[prototype]]` 值为 `Object`。

第三种：正解。创建了一个 `Person` 实例，有了属性与方法。`Man` 的所有实例将共享这个 `Person` 实例。

![sen3]()