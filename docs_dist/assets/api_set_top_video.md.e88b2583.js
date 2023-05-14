import{_ as t,o as e,c as d,O as o}from"./chunks/framework.9be35eee.js";const g=JSON.parse('{"title":"设置用户置顶视频","description":"","frontmatter":{},"headers":[],"relativePath":"api/set_top_video.md","filePath":"api/set_top_video.md"}'),r={name:"api/set_top_video.md"},s=o('<h1 id="设置用户置顶视频" tabindex="-1">设置用户置顶视频 <a class="header-anchor" href="#设置用户置顶视频" aria-label="Permalink to &quot;设置用户置顶视频&quot;">​</a></h1><p><strong>必选参数</strong> : <code>aid</code> : 置顶目标稿件avid <code>bvid</code> : 置顶目标稿件bvid <code>reason</code> : 置顶视频备注</p><p><strong>接口地址</strong> : <code>/set/top/video</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/set/top/video</code></p><p><strong>说明</strong> : <code>aid</code> 与 <code>bvid</code> 必选其一 <code>reason</code> 可为空</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-304：未修改<br>-400：请求错误<br>53014：稿件已失效<br>53015：备注过长<br>53017：置顶非自己的稿件</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table>',9),a=[s];function c(n,_,p,i,h,b){return e(),d("div",null,a)}const m=t(r,[["render",c]]);export{g as __pageData,m as default};