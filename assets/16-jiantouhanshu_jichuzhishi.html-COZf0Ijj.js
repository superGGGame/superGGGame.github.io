import{_ as s,c as a,a as e,o as p}from"./app-DEZf6KcN.js";const t={};function l(c,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="箭头函数-基础知识" tabindex="-1"><a class="header-anchor" href="#箭头函数-基础知识"><span>箭头函数，基础知识</span></a></h1><p>创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好。</p><p>它被称为“箭头函数”，因为它看起来像这样：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> argN</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> expression<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里创建了一个函数 <code>func</code> ， 它接受参数 <code>arg1..argN</code>，然后使用参数对右侧的 <code>expression</code> 求值并返回其结果。</p><p>换句话说，它是下面这段代码的更短的版本：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> argN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> expression<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们来看一个具体的例子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 这个箭头函数是下面这个函数的更短的版本：</span>
<span class="line"></span>
<span class="line">let sum = function(a, b) {</span>
<span class="line">  return a + b;</span>
<span class="line">};</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code>(a, b) =&gt; a + b</code> 表示一个函数接受两个名为 a 和 b 的参数。在执行时，它将对表达式 a + b 求值，并返回计算结果。</p><ul><li>如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。 例如：</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 差不多等同于：let double = function(n) { return n * 2 }</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果没有参数，括号则是空的（但括号必须保留）：</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数可以像函数表达式一样使用。</p><p>例如，动态创建一个函数：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;What is your age?&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> welcome <span class="token operator">=</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Greetings!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多行箭头函数" tabindex="-1"><a class="header-anchor" href="#多行箭头函数"><span>多行箭头函数</span></a></h2><p>有时我们需要更复杂一点的函数，比如带有多行的表达式或语句。在这种情况下，我们可以使用花括号将它们括起来。区别在于，使用花括号包裹多行代码时，我们需要使用 <code>return</code> 语句才能返回值（像常规函数一样）。</p><p>例子：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 花括号表示开始一个多行函数</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 如果我们使用了花括号，那么我们需要一个显式的 “return”</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>箭头函数对于简单的操作很方便，特别是对于单行的函数。他具体由两种形式：</p><ol><li>不带花括号： <code>（...args) =&gt; expression</code> —— 右侧时一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 <code>n =&gt; n*2</code>。</li><li>带花括号： <code>(...args) =&gt; { body }</code> —— 花括号允许我们在函数中编写多个语句，但是我们需要显式地 <code>return</code> 来返回一些内容。</li></ol>`,24)]))}const o=s(t,[["render",l],["__file","16-jiantouhanshu_jichuzhishi.html.vue"]]),u=JSON.parse('{"path":"/series/JavaScript/01-JavaScriptjichuzhishi/16-jiantouhanshu_jichuzhishi.html","title":"箭头函数，基础知识","lang":"zh-CN","frontmatter":{"title":"箭头函数，基础知识","date":"2025-02-20 12:08"},"headers":[{"level":2,"title":"多行箭头函数","slug":"多行箭头函数","link":"#多行箭头函数","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"filePathRelative":"series/JavaScript/01-JavaScript基础知识/16-箭头函数,基础知识.md"}');export{o as comp,u as data};
