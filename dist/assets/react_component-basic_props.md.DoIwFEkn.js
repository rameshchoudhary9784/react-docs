import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.TRcRhQLi.js";const g=JSON.parse('{"title":"Props","description":"","frontmatter":{},"headers":[],"relativePath":"react/component-basic/props.md","filePath":"react/component-basic/props.md"}'),t={name:"react/component-basic/props.md"},p=n(`<h1 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Props (short for properties) is a fundamental concept in React that helps pass and share data between components. Props are a way to transmit data from the parent component to the child component.</p><h2 id="how-are-props-used" tabindex="-1">How are props used? <a class="header-anchor" href="#how-are-props-used" aria-label="Permalink to &quot;How are props used?&quot;">​</a></h2><p>In React, the parent component provides data to its child component in the form of props. Props are immutable (unchangeable), that is, the child component cannot change the props directly, it can only read them.</p><h2 id="syntax-of-props" tabindex="-1">Syntax of Props <a class="header-anchor" href="#syntax-of-props" aria-label="Permalink to &quot;Syntax of Props&quot;">​</a></h2><p>To pass props to a child component, they are passed as attributes inside the JSX tag of the parent component. Let&#39;s see an example:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Parent Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ChildComponent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./ChildComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ParentComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Abhinav&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ParentComponent;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Child Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChildComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Name: {props.name}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Age: {props.age}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ChildComponent;</span></span></code></pre></div><p>In this example, the <code>ParentComponent</code> is passing data to the <code>ChildComponent</code> in the form of <code>name</code> and <code>age</code> props. <code>ChildComponent</code> receives the props and renders them.</p><h2 id="benefits-of-props" tabindex="-1">Benefits of Props <a class="header-anchor" href="#benefits-of-props" aria-label="Permalink to &quot;Benefits of Props&quot;">​</a></h2><ul><li><strong>Reusability:</strong> Props make components reusable because data can be easily transmitted from the parent component to the child component.</li><li><strong>Component Communication:</strong> Communication between components occurs through props, which makes React applications modular and maintainable.</li><li><strong>Dynamic UI:</strong> Using props it is easy to display dynamic data, such as user information, list items, etc.</li></ul><h2 id="type-of-props" tabindex="-1">Type of Props <a class="header-anchor" href="#type-of-props" aria-label="Permalink to &quot;Type of Props&quot;">​</a></h2><p><strong>1. Strings:</strong> Props can be passed as strings.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Abhinav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p><strong>2. Numbers:</strong> Props can be passed as numbers.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;</span></span></code></pre></div><p><strong>3. Boolean:</strong> Props can be passed as boolean values.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isActive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} /&gt;</span></span></code></pre></div><p><strong>4. Functions:</strong> Props can be passed as functions, which can be used in child components.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{handleClick} /&gt;</span></span></code></pre></div><p><strong>5. Objects:</strong> Props can be passed as objects.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChildComponent</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Abhinav&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }} /&gt;</span></span></code></pre></div><h2 id="default-props" tabindex="-1">Default Props <a class="header-anchor" href="#default-props" aria-label="Permalink to &quot;Default Props&quot;">​</a></h2><p>Components can also define default props that are passed to a component if a specific prop is not passed from the parent component.</p><p>Example:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChildComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Name: {props.name}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Age: {props.age}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ChildComponent.defaultProps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Guest&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ChildComponent;</span></span></code></pre></div><p>In this example, if the other <code>ParentComponent</code> doesn&#39;t pass a <code>name</code> and <code>age</code> props, then <code>ChildComponent</code> will take the default values ​<code>​(name: &#39;guest&#39;</code>, <code>age: 18)</code>.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Props is a powerful mechanism of component communication and data transfer in React. Props makes components reusable and helps in managing dynamic data. Props&#39; immutable nature ensures that data flow remains predictable and maintainable, which streamlines the development of React applications.</p>`,29),e=[p];function h(l,k,o,r,d,E){return a(),i("div",null,e)}const y=s(t,[["render",h]]);export{g as __pageData,y as default};
