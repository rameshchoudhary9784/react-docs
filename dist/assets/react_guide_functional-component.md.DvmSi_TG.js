import{_ as n,c as a,o as e,a4 as t}from"./chunks/framework.TRcRhQLi.js";const m=JSON.parse('{"title":"Functional Components","description":"","frontmatter":{},"headers":[],"relativePath":"react/guide/functional-component.md","filePath":"react/guide/functional-component.md"}'),s={name:"react/guide/functional-component.md"},i=t(`<h1 id="functional-components" tabindex="-1">Functional Components <a class="header-anchor" href="#functional-components" aria-label="Permalink to &quot;Functional Components&quot;">​</a></h1><p>Functional components are the basic building blocks of React which are a simple JavaScript function. These functions accept props (properties) and return React elements. Functional components are also called stateless components because they do not manage state within themselves (this was the case earlier, but now after the introduction of React Hooks, state can be managed in functional components as well).</p><p>Functional components are simple and lightweight, and they are relatively easy to write and understand.</p><h2 id="structure-of-functional-component" tabindex="-1">Structure of Functional Component <a class="header-anchor" href="#structure-of-functional-component" aria-label="Permalink to &quot;Structure of Functional Component&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Greeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, World!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Greeting;</span></span></code></pre></div><p>This is a simple functional component that returns a &lt;h1&gt; element containing the text “Hello, World!”.</p><h2 id="advantages-of-functional-components" tabindex="-1">Advantages of Functional Components <a class="header-anchor" href="#advantages-of-functional-components" aria-label="Permalink to &quot;Advantages of Functional Components&quot;">​</a></h2><ul><li><strong>Simplicity:</strong> Functional components are simple and easy to write.</li><li><strong>Performance:</strong> These are generally faster than class components as they do not require lifecycle methods.</li><li><strong>Hooks:</strong> With the introduction of React Hooks, functional components can manage state and lifecycle methods.</li><li><strong>Reusable:</strong> These are reusable and make the code modular.</li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Functional components are an essential part of React applications. These are simple, efficient and reusable. With the introduction of React Hooks, using functional components has become even more beneficial as we can now manage state and lifecycle methods as well. By using functional components you can keep your React applications clean and maintainable.</p>`,10),o=[i];function l(c,r,p,h,d,u){return e(),a("div",null,o)}const g=n(s,[["render",l]]);export{m as __pageData,g as default};
