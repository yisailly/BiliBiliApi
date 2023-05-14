import{_ as t,o as d,c as e,O as r}from"./chunks/framework.9be35eee.js";const u=JSON.parse('{"title":"获取账号安全情况","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_safe.md","filePath":"api/get_safe.md"}'),o={name:"api/get_safe.md"},a=r('<h1 id="获取账号安全情况" tabindex="-1">获取账号安全情况 <a class="header-anchor" href="#获取账号安全情况" aria-label="Permalink to &quot;获取账号安全情况&quot;">​</a></h1><p><strong>必选参数</strong> : <code>无</code></p><p><strong>接口地址</strong> : <code>/get/safe</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/safe</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>account_info</td><td>obj</td><td>账号绑定信息</td><td></td></tr><tr><td>account_safe</td><td>obj</td><td>密码安全信息</td><td></td></tr><tr><td>account_sns</td><td>obj</td><td>互联登录绑定信息</td><td></td></tr><tr><td>account_other</td><td>obj</td><td></td><td></td></tr></tbody></table><p><code>data</code> 中的 <code>account_info</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>hide_tel</td><td>str</td><td>绑定的手机号</td><td>星号隐藏部分信息</td></tr><tr><td>hide_mail</td><td>str</td><td>绑定的邮箱</td><td>星号隐藏部分信息</td></tr><tr><td>bind_tel</td><td>bool</td><td>是否绑定手机号</td><td>false：未绑定<br>true：已绑定</td></tr><tr><td>bind_mail</td><td>bool</td><td>是否绑定邮箱</td><td>false：未绑定<br>true：已绑定</td></tr><tr><td>tel_verify</td><td>bool</td><td>是否验证手机号</td><td>false：未验证<br>true：已验证</td></tr><tr><td>mail_verify</td><td>bool</td><td>是否验证邮箱</td><td>false：未验证<br>true：已验证</td></tr><tr><td>unneeded_check</td><td>bool</td><td>是否未设置密码</td><td>false：已设置<br>true：未设置</td></tr><tr><td>realname_certified</td><td>bool</td><td>是否实名认证</td><td>false：已认证<br>true：未认证</td></tr></tbody></table><p><code>data</code> 中的 <code>account_safe</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>Score</td><td>num</td><td>账号安全等级</td><td>0-100<br>已弃用？</td></tr><tr><td>score_new</td><td>num</td><td>新版账号安全等级</td><td>0-100</td></tr><tr><td>pwd_level</td><td>num</td><td>当前密码强度等级</td><td>1：弱<br>2：中<br>3：强</td></tr><tr><td>security</td><td>bool</td><td>当前密码是否安全</td><td>false：不安全<br>true：安全</td></tr></tbody></table><p><code>data</code> 中的 <code>account_sns</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>weibo_bind</td><td>num</td><td>是否绑定微博</td><td>0：未绑定<br>1：已绑定</td></tr><tr><td>qq_bind</td><td>num</td><td>是否绑定qq</td><td>0：未绑定<br>1：已绑定</td></tr><tr><td>wechat_bind</td><td>num</td><td>是否绑定微信</td><td>0：未绑定<br>1：已绑定</td></tr></tbody></table><p><code>data</code> 中的 <code>account_other</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>skipVerify</td><td>bool</td><td>false</td><td>作用尚不明确</td></tr></tbody></table>',19),h=[a];function c(s,n,b,_,l,i){return d(),e("div",null,h)}const f=t(o,[["render",c]]);export{u as __pageData,f as default};