import{_ as n,c as s,o as a,a as t}from"./app.ee70c814.js";const q='{"title":"\u5B89\u88C5","description":"","frontmatter":{"sidebar":false},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u547D\u4EE4\u884C\u64CD\u4F5C","slug":"\u547D\u4EE4\u884C\u64CD\u4F5C"},{"level":2,"title":"vscode \u76F8\u5173\u914D\u7F6E","slug":"vscode-\u76F8\u5173\u914D\u7F6E"}],"relativePath":"index.md","lastUpdated":1643017853121}',e={},o=t(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># with npm </span>
<span class="token function">npm</span> i eslint-config -D
<span class="token comment"># with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> eslint-config -D
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA<code>.eslintrc</code>\u6587\u4EF6</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>&#39;@tangxiaomi&#39;<span class="token punctuation">]</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u547D\u4EE4\u884C\u64CD\u4F5C" tabindex="-1">\u547D\u4EE4\u884C\u64CD\u4F5C <a class="header-anchor" href="#\u547D\u4EE4\u884C\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u6307\u5B9A\u540E\u7F00\u540D</span>
npx eslint <span class="token builtin class-name">.</span> --ext .ts
<span class="token comment"># \u6307\u5B9A\u591A\u4E2A\u540E\u7F00\u540D</span>
npx eslint <span class="token builtin class-name">.</span> --ext .ts --ext .js --ext .vue
\u6216
npx eslint <span class="token builtin class-name">.</span> --ext .ts,.js,.vue
<span class="token comment"># \u6307\u5B9A\u6587\u4EF6\u5939</span>
npx eslint --ext .ts,.js,.vue  /src

<span class="token comment"># \u6307\u5B9Aeslint\u914D\u7F6E\u6587\u4EF6</span>
npx eslint -c .eslintrc --ext .ts,.js,.vue  /src
<span class="token comment"># fix</span>
npx eslint -c .eslintrc --ext .ts,.js,.vue  /src --fix
</code></pre></div><h2 id="vscode-\u76F8\u5173\u914D\u7F6E" tabindex="-1">vscode \u76F8\u5173\u914D\u7F6E <a class="header-anchor" href="#vscode-\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5eslint\u63D2\u4EF6</li><li>\u4F7F\u7528eslint\u683C\u5F0F\u5316\u6587\u4EF6</li><li>\u6DFB\u52A0vscode\u76F8\u5173\u914D\u7F6E</li></ul><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;overrideConfigFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./.eslintrc&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),p=[o];function c(l,i,r,u,k,d){return a(),s("div",null,p)}var v=n(e,[["render",c]]);export{q as __pageData,v as default};
