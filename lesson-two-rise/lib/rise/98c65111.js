(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_23_0__articulate_design-system-to-37c23b"],{98998(Yi){var Io="Expected a function",ha=NaN,ie="[object Symbol]",jo=/^\s+|\s+$/g,Xn=/^[-+]0x[0-9a-f]+$/i,St=/^0b[01]+$/i,Er=/^0o[0-7]+$/i,Ro=parseInt,La=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Lo=typeof self=="object"&&self&&self.Object===Object&&self,Po=La||Lo||Function("return this")(),ea=Object.prototype,Ie=ea.toString,Mo=Math.max,Jn=Math.min,je=function(){return Po.Date.now()};function Qe(dr,Kr,Pa){var se,X,Zr,Ma,ba,$a,Le=0,Do=!1,Ba=!1,n=!0;if(typeof dr!="function")throw new TypeError(Io);Kr=zt(Kr)||0,Re(Pa)&&(Do=!!Pa.leading,Ba="maxWait"in Pa,Zr=Ba?Mo(zt(Pa.maxWait)||0,Kr):Zr,n="trailing"in Pa?!!Pa.trailing:n);function h(_r){var Ya=se,Me=X;return se=X=void 0,Le=_r,Ma=dr.apply(Me,Ya),Ma}function rt(_r){return Le=_r,ba=setTimeout(Pe,Kr),Do?h(_r):Ma}function Et(_r){var Ya=_r-$a,Me=_r-Le,Oo=Kr-Ya;return Ba?Jn(Oo,Zr-Me):Oo}function at(_r){var Ya=_r-$a,Me=_r-Le;return $a===void 0||Ya>=Kr||Ya<0||Ba&&Me>=Zr}function Pe(){var _r=je();if(at(_r))return _t(_r);ba=setTimeout(Pe,Et(_r))}function _t(_r){return ba=void 0,n&&se?h(_r):(se=X=void 0,Ma)}function rc(){ba!==void 0&&clearTimeout(ba),Le=0,se=$a=X=ba=void 0}function s(){return ba===void 0?Ma:_t(je())}function Tt(){var _r=je(),Ya=at(_r);if(se=arguments,X=this,$a=_r,Ya){if(ba===void 0)return rt($a);if(Ba)return ba=setTimeout(Pe,Kr),h($a)}return ba===void 0&&(ba=setTimeout(Pe,Kr)),Ma}return Tt.cancel=rc,Tt.flush=s,Tt}function Re(dr){var Kr=typeof dr;return!!dr&&(Kr=="object"||Kr=="function")}function Bo(dr){return!!dr&&typeof dr=="object"}function Qn(dr){return typeof dr=="symbol"||Bo(dr)&&Ie.call(dr)==ie}function zt(dr){if(typeof dr=="number")return dr;if(Qn(dr))return ha;if(Re(dr)){var Kr=typeof dr.valueOf=="function"?dr.valueOf():dr;dr=Re(Kr)?Kr+"":Kr}if(typeof dr!="string")return dr===0?dr:+dr;dr=dr.replace(jo,"");var Pa=St.test(dr);return Pa||Er.test(dr)?Ro(dr.slice(2),Pa?2:8):Xn.test(dr)?ha:+dr}Yi.exports=Qe},98179(Yi,Io,ha){"use strict";ha.r(Io),ha.d(Io,{Arc:()=>um,ArcAbstractFlexLayouts:()=>Kr,ArcAbstractGapSizes:()=>Bo,ArcAbstractIconSizes:()=>Re,ArcAbstractOrientations:()=>Pa,ArcAbstractPopoverActions:()=>Qe,ArcAbstractPopoverModes:()=>je,ArcAbstractTextLayouts:()=>dr,ArcAbstractTextOverflows:()=>zt,ArcAbstractTextSizes:()=>Qn,ArcAvatar:()=>yc,ArcAvatarColors:()=>vs,ArcAvatarColorsReserved:()=>_u,ArcAvatarOverflow:()=>U0,ArcAvatarOverflowSizes:()=>Pu,ArcAvatarPile:()=>ih,ArcAvatarPileSizes:()=>Lu,ArcAvatarSizes:()=>Tu,ArcAvatarText:()=>xc,ArcAvatarTextGapSizes:()=>Iu,ArcAvatarTextOverflows:()=>ju,ArcAvatarTextSizes:()=>Ru,ArcBadge:()=>ng,ArcBadgeColors:()=>J0,ArcBadgeContrasts:()=>eg,ArcBadgeCount:()=>fg,ArcBadgeCountColors:()=>Q0,ArcBadgeCountContrasts:()=>gg,ArcBadgeCountShapes:()=>vg,ArcBadgeCountSizes:()=>ug,ArcBadgeCountVariants:()=>hg,ArcBadgeLayouts:()=>ag,ArcBadgeSizes:()=>rg,ArcBadgeVariants:()=>tg,ArcBanner:()=>Rg,ArcBannerActionPlacements:()=>zg,ArcBannerAlignments:()=>Eg,ArcBannerDefaults:()=>we,ArcBannerDensities:()=>Ag,ArcBannerLayouts:()=>Sg,ArcBannerSchemes:()=>_g,ArcBannerVariants:()=>Ig,ArcButton:()=>Cr,ArcButtonHierarchies:()=>Xs,ArcButtonLayouts:()=>Qh,ArcButtonPopoverActions:()=>a0,ArcButtonSchemes:()=>Dc,ArcButtonShadows:()=>r0,ArcButtonShapes:()=>Xh,ArcButtonSizes:()=>Jh,ArcButtonVariants:()=>Zs,ArcCheckbox:()=>gl,ArcCheckboxBar:()=>Gg,ArcCheckboxBarLayouts:()=>Ug,ArcCheckboxBarOption:()=>Kg,ArcCheckboxBarSizes:()=>Wg,ArcCheckboxLayouts:()=>Fg,ArcCheckboxSizes:()=>Ng,ArcCheckboxVariants:()=>Hg,ArcColorAllTools:()=>vl,ArcColorPalette:()=>En,ArcColorPaletteAddFlows:()=>Zg,ArcColorPicker:()=>qe,ArcColorPickerDefaults:()=>Se,ArcColorPickerModes:()=>qg,ArcColorSimpleTools:()=>pl,ArcColorSwatch:()=>pi,ArcColorSwatchKinds:()=>Yg,ArcColorValueFormats:()=>xm,ArcDropdownMenu:()=>Ti,ArcIcon:()=>ir,ArcIconText:()=>Jr,ArcIconTextVariants:()=>Eh,ArcInputAction:()=>yd,ArcLabel:()=>Ce,ArcLabelContent:()=>Ue,ArcLabelLayouts:()=>Pg,ArcLink:()=>Dp,ArcLinkVariants:()=>Bp,ArcModal:()=>nf,ArcModalAlert:()=>sf,ArcModalAlertDefaults:()=>fe,ArcModalAlertVariants:()=>Hp,ArcModalBackdropColors:()=>Vp,ArcModalBodyPaddings:()=>Up,ArcModalCloseReasons:()=>Kp,ArcModalCommonDefaults:()=>ia,ArcModalCommonVariants:()=>Fp,ArcModalConfirm:()=>zd,ArcModalConfirmDefaults:()=>Te,ArcModalConfirmVariants:()=>Np,ArcModalSchemes:()=>Op,ArcModalSizes:()=>Wp,ArcPopover:()=>he,ArcPopoverActions:()=>lh,ArcPopoverAnchors:()=>Cc,ArcPopoverBoundaries:()=>Ac,ArcPopoverButton:()=>qt,ArcPopoverDefaults:()=>va,ArcPopoverDensities:()=>Cs,ArcPopoverModes:()=>kc,ArcPopoverSchemes:()=>wc,ArcPopoverVariants:()=>ws,ArcPopoverVariantsWithOutline:()=>dh,ArcRadio:()=>Ed,ArcRadioBar:()=>ff,ArcRadioBarLayouts:()=>gf,ArcRadioBarOption:()=>pf,ArcRadioBarSizes:()=>vf,ArcRadioLayouts:()=>df,ArcRadioSizes:()=>uf,ArcSearch:()=>Bd,ArcSearchLayouts:()=>jf,ArcSearchSizes:()=>Rf,ArcSearchVariants:()=>Lf,ArcSelect:()=>Kf,ArcSelectLayouts:()=>Df,ArcSelectSizes:()=>Of,ArcSelectVariants:()=>Ff,ArcSwitch:()=>Zf,ArcSwitchLabelPositions:()=>wt,ArcSwitchSizes:()=>Gf,ArcSwitchStates:()=>Wr,ArcSystemAIGradients:()=>Mo,ArcSystemAlignments:()=>Lo,ArcSystemColors:()=>Ie,ArcSystemGradients:()=>Jn,ArcSystemHierarchies:()=>Ro,ArcSystemLayouts:()=>La,ArcSystemLineHeights:()=>Po,ArcSystemSchemes:()=>ie,ArcSystemShadows:()=>jo,ArcSystemShapes:()=>St,ArcSystemSizes:()=>ea,ArcSystemSurfaces:()=>Xn,ArcSystemVariants:()=>Er,ArcTextAlignments:()=>nm,ArcTextBodyElements:()=>Kd,ArcTextBodySizes:()=>tm,ArcTextBodyVariants:()=>om,ArcTextElements:()=>Gd,ArcTextHeadingElements:()=>Wd,ArcTextHeadingSizes:()=>rm,ArcTextHeadingVariants:()=>em,ArcTextInput:()=>Fn,ArcTextInputLayouts:()=>up,ArcTextInputSizes:()=>hp,ArcTextInputTypes:()=>vp,ArcTextInputVariants:()=>gp,ArcTextKinds:()=>Xf,ArcTextLineHeights:()=>cm,ArcTextSchemes:()=>Jf,ArcTextSubheadingSizes:()=>am,ArcTextTitleSizes:()=>Qf,ArcToast:()=>du,ArcToastDefaults:()=>ou,ArcToastPlacements:()=>tu,ArcToastPopoverActions:()=>gm,ArcToastPopoverModes:()=>eu,ArcToastProgressBarVariants:()=>vm,ArcToastSchemes:()=>Jd,ArcToastSeverities:()=>Qd,ArcToastSizes:()=>ru,ArcToastVariants:()=>au,ArcTooltip:()=>nn,ArcTooltipDefaults:()=>Oa,DeprecatedButtonVariants:()=>Oc,SVGLogoArticulate:()=>uc,SVGLogoProductAI:()=>hc,SVGLogoProductPeek:()=>gc,SVGLogoProductReach:()=>vc,SVGLogoProductReview:()=>pc,SVGLogoProductRise:()=>fc,SVGLogoProductStoryline:()=>mc,SVGLogoProductStudio:()=>bc,StorageType:()=>So,adoptStyles:()=>sr,adoptThemeTokens:()=>Au,anchorNameRegistry:()=>Ot,assignRef:()=>Ma,bindDelegatedEvents:()=>Gs,canonicalizeToHsv:()=>An,clamp:()=>ba,clampIt:()=>K,colorValueEquals:()=>Sn,compositeRgbaOver:()=>Cl,createEmptyRect:()=>km,css:()=>s,cssFeatures:()=>zc,decodeDeprecatedButtonVariant:()=>c0,didElementRectChange:()=>Do,encodeDeprecatedButtonVariant:()=>i0,extractTextFromReactNode:()=>Bt,formatAlphaCss:()=>wn,formatAlphaPercent:()=>mt,formatAnchorName:()=>Ec,getArcColorAs:()=>jl,getArcColorData:()=>Ge,getArcColorParts:()=>Il,getArcColorValue:()=>Rl,getArcContrastColor:()=>gi,getColorName:()=>Cn,getCssColor:()=>Ca,getPlainLabel:()=>Hd,getPreferredAnchorForTooltipId:()=>Mc,getResolvedHierarchy:()=>al,getResolvedScheme:()=>el,getResolvedShape:()=>Js,getResolvedVariant:()=>rl,getSelectedColorMeta:()=>vi,getShadowRootOrDocument:()=>Ba,handlePopover:()=>zs,handleToast:()=>nu,hasBaseSelectSupport:()=>Dd,hasEmptyValueOption:()=>Nd,hasMatchingColorValue:()=>hi,hasNativeAnchorPositioning:()=>Sc,hslToRgbaData:()=>$l,hsvDeltaOK:()=>ci,hsvToRgbaData:()=>Va,isDifferent:()=>$a,isGroupLegendItem:()=>Od,isHexLike:()=>Sl,isHsvLike:()=>El,isObject:()=>Ps,isRgbaLike:()=>zl,isSame:()=>Le,isSelectGroup:()=>Yn,isSelectedColorMatch:()=>Pl,isString:()=>Go,joinArray:()=>Dt,logError:()=>wh,logMessage:()=>kh,logSkippedTopLevelItem:()=>Fd,logWarning:()=>Bs,makeHtmlId:()=>sh,makeRandomColor:()=>Ll,mapDeprecated:()=>se,noTailAnchors:()=>As,normalizeAnchorName:()=>Ft,normalizeByte:()=>Yr,normalizeColorValue:()=>bt,normalizeHue:()=>ml,normalizeUnit:()=>bl,oklchToRgbaData:()=>kl,parseAlphaInput:()=>_l,parseByte:()=>to,parseCssColorToRgba:()=>Tr,parseHexStringToRgba:()=>Al,pickFromList:()=>X,pickFromListByKeys:()=>Zr,relativeLuminance:()=>wl,renderableOption:()=>kt,resolveTailMetrics:()=>Ss,rgbaBytesEqual:()=>oi,rgbaDeltaOK:()=>kn,rgbaEchoDeltaOK:()=>ni,rgbaToHslData:()=>yl,rgbaToHsvData:()=>oo,rgbaToOklchData:()=>xl,roundIt:()=>xn,shareAdoptedStyles:()=>Cu,snapIt:()=>fl,splitString:()=>Ms,syncAnchorName:()=>Es,toHEX:()=>Ta,toHSL:()=>di,toLinearChannel:()=>We,toOKLCH:()=>ui,toRGB:()=>Ke,unbindDelegatedEvents:()=>Vh,useIsoLayoutEffect:()=>Uo,useStableId:()=>Rr,useStorage:()=>ym});const ie=["auto","light","dark","inverse"],jo=["none","sm","md","lg","xl"],Xn=["primary","secondary","inset","raised","floating"],St=["circle","round","pill","square","narrow"],Er=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Ro=["primary","secondary","tertiary","plain","link-style"],La=["hug","fill","icon","gutter","inline"],Lo=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Po=["inherit","tight","standard","loose"],ea=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Ie=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Mo=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Jn=[...Mo],je=["","auto","manual"],Qe=["toggle","show","hide"],Re=["inherit","xl","lg","md","sm","xs"],Bo=["inherit","lg","md","sm"],Qn=["inherit","md","sm"],zt=["inherit","wrap","truncate"],dr=["gutter","inline"],Kr=["hug","fill"],Pa=["horizontal","vertical"],se=(r,a)=>a[r]||r,X=(r,a)=>r.filter(e=>a.includes(e)),Zr=(r,a)=>a.filter(e=>r.includes(e)),Ma=(r,a)=>{r&&(typeof r=="function"?r(a):r.current=a)},ba=(r,a=0,e=100)=>Math.min(Math.max(r,a),e),$a=(r,a)=>r!==a,Le=(r,a)=>r===a,Do=({a:r,b:a})=>$a(r?.top,a?.top)||$a(r?.left,a?.left)||$a(r?.width,a?.width)||$a(r?.height,a?.height);function Ba(r){if(!(r instanceof Node))return null;const a=r.getRootNode();return a instanceof ShadowRoot||a instanceof Document?a:null}var n=ha(1463),h=ha(9608);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,Et=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),Pe=new WeakMap;class _t{constructor(a,e,t){if(this._$cssResult$=!0,t!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o;const e=this.t;if(Et&&a===void 0){const t=e!==void 0&&e.length===1;t&&(a=Pe.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),t&&Pe.set(e,a))}return a}toString(){return this.cssText}}const rc=r=>new _t(typeof r=="string"?r:r+"",void 0,at),s=(r,...a)=>{const e=r.length===1?r[0]:a.reduce(((t,o,c)=>t+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new _t(e,r,at)},Tt=(r,a)=>{if(Et)r.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of a){const t=document.createElement("style"),o=rt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=e.cssText,r.appendChild(t)}},_r=Et?r=>r:r=>r instanceof CSSStyleSheet?(a=>{let e="";for(const t of a.cssRules)e+=t.cssText;return rc(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ya,defineProperty:Me,getOwnPropertyDescriptor:Oo,getOwnPropertyNames:vu,getOwnPropertySymbols:pu,getPrototypeOf:fu}=Object,Fo=globalThis,Zi=Fo.trustedTypes,mu=Zi?Zi.emptyScript:"",bu=Fo.reactiveElementPolyfillSupport,It=(r,a)=>r,ac={toAttribute(r,a){switch(a){case Boolean:r=r?mu:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,a){let e=r;switch(a){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Xi=(r,a)=>!Ya(r,a),Ji={attribute:!0,type:String,converter:ac,reflect:!1,useDefault:!1,hasChanged:Xi};Symbol.metadata??=Symbol("metadata"),Fo.litPropertyMetadata??=new WeakMap;class et extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=Ji){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(a,t,e);o!==void 0&&Me(this.prototype,a,o)}}static getPropertyDescriptor(a,e,t){const{get:o,set:c}=Oo(this.prototype,a)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){const l=o?.call(this);c?.call(this,i),this.requestUpdate(a,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Ji}static _$Ei(){if(this.hasOwnProperty(It("elementProperties")))return;const a=fu(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(It("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(It("properties"))){const e=this.properties,t=[...vu(e),...pu(e)];for(const o of t)this.createProperty(o,e[o])}const a=this[Symbol.metadata];if(a!==null){const e=litPropertyMetadata.get(a);if(e!==void 0)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const e=[];if(Array.isArray(a)){const t=new Set(a.flat(1/0).reverse());for(const o of t)e.unshift(_r(o))}else a!==void 0&&e.push(_r(a));return e}static _$Eu(a,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(a.set(t,this[t]),delete this[t]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,e,t){this._$AK(a,t)}_$ET(a,e){const t=this.constructor.elementProperties.get(a),o=this.constructor._$Eu(a,t);if(o!==void 0&&t.reflect===!0){const c=(t.converter?.toAttribute!==void 0?t.converter:ac).toAttribute(e,t.type);this._$Em=a,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$Em=null}}_$AK(a,e){const t=this.constructor,o=t._$Eh.get(a);if(o!==void 0&&this._$Em!==o){const c=t.getPropertyOptions(o),i=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:ac;this._$Em=o;const l=i.fromAttribute(e,c.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(a,e,t){if(a!==void 0){const o=this.constructor,c=this[a];if(t??=o.getPropertyOptions(a),!((t.hasChanged??Xi)(c,e)||t.useDefault&&t.reflect&&c===this._$Ej?.get(a)&&!this.hasAttribute(o._$Eu(a,t))))return;this.C(a,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:t,reflect:o,wrapped:c},i){t&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,i??e??this[a]),c!==!0||i!==void 0)||(this._$AL.has(a)||(this.hasUpdated||t||(e=void 0),this._$AL.set(a,e)),o===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,c]of t){const{wrapped:i}=c,l=this[o];i!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,c,l)}}let a=!1;const e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(t){throw a=!1,this._$EM(),t}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(a){}firstUpdated(a){}}et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[It("elementProperties")]=new Map,et[It("finalized")]=new Map,bu?.({ReactiveElement:et}),(Fo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=globalThis,No=ec.trustedTypes,Qi=No?No.createPolicy("lit-html",{createHTML:r=>r}):void 0,tc="$lit$",le=`lit$${Math.random().toFixed(9).slice(2)}$`,oc="?"+le,$u=`<${oc}>`,Be=document,jt=()=>Be.createComment(""),Rt=r=>r===null||typeof r!="object"&&typeof r!="function",nc=Array.isArray,rs=r=>nc(r)||typeof r?.[Symbol.iterator]=="function",cc=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,as=/-->/g,es=/>/g,De=RegExp(`>|${cc}(?:([^\\s"'>=/]+)(${cc}*=${cc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ts=/'/g,os=/"/g,ns=/^(?:script|style|textarea|title)$/i,ic=r=>(a,...e)=>({_$litType$:r,strings:a,values:e}),Em=ic(1),_m=ic(2),Tm=ic(3),tt=Symbol.for("lit-noChange"),Fr=Symbol.for("lit-nothing"),cs=new WeakMap,Oe=Be.createTreeWalker(Be,129);function is(r,a){if(!nc(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qi!==void 0?Qi.createHTML(a):a}const ss=(r,a)=>{const e=r.length-1,t=[];let o,c=a===2?"<svg>":a===3?"<math>":"",i=Lt;for(let l=0;l<e;l++){const d=r[l];let u,g,f=-1,p=0;for(;p<d.length&&(i.lastIndex=p,g=i.exec(d),g!==null);)p=i.lastIndex,i===Lt?g[1]==="!--"?i=as:g[1]!==void 0?i=es:g[2]!==void 0?(ns.test(g[2])&&(o=RegExp("</"+g[2],"g")),i=De):g[3]!==void 0&&(i=De):i===De?g[0]===">"?(i=o??Lt,f=-1):g[1]===void 0?f=-2:(f=i.lastIndex-g[2].length,u=g[1],i=g[3]===void 0?De:g[3]==='"'?os:ts):i===os||i===ts?i=De:i===as||i===es?i=Lt:(i=De,o=void 0);const m=i===De&&r[l+1].startsWith("/>")?" ":"";c+=i===Lt?d+$u:f>=0?(t.push(u),d.slice(0,f)+tc+d.slice(f)+le+m):d+le+(f===-2?l:m)}return[is(r,c+(r[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),t]};class Pt{constructor({strings:a,_$litType$:e},t){let o;this.parts=[];let c=0,i=0;const l=a.length-1,d=this.parts,[u,g]=ss(a,e);if(this.el=Pt.createElement(u,t),Oe.currentNode=this.el.content,e===2||e===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Oe.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(tc)){const p=g[i++],m=o.getAttribute(f).split(le),b=/([.?@])?(.*)/.exec(p);d.push({type:1,index:c,name:b[2],strings:m,ctor:b[1]==="."?ds:b[1]==="?"?us:b[1]==="@"?hs:Mt}),o.removeAttribute(f)}else f.startsWith(le)&&(d.push({type:6,index:c}),o.removeAttribute(f));if(ns.test(o.tagName)){const f=o.textContent.split(le),p=f.length-1;if(p>0){o.textContent=No?No.emptyScript:"";for(let m=0;m<p;m++)o.append(f[m],jt()),Oe.nextNode(),d.push({type:2,index:++c});o.append(f[p],jt())}}}else if(o.nodeType===8)if(o.data===oc)d.push({type:2,index:c});else{let f=-1;for(;(f=o.data.indexOf(le,f+1))!==-1;)d.push({type:7,index:c}),f+=le.length-1}c++}}static createElement(a,e){const t=Be.createElement("template");return t.innerHTML=a,t}}function Fe(r,a,e=r,t){if(a===tt)return a;let o=t!==void 0?e._$Co?.[t]:e._$Cl;const c=Rt(a)?void 0:a._$litDirective$;return o?.constructor!==c&&(o?._$AO?.(!1),c===void 0?o=void 0:(o=new c(r),o._$AT(r,e,t)),t!==void 0?(e._$Co??=[])[t]=o:e._$Cl=o),o!==void 0&&(a=Fe(r,o._$AS(r,a.values),o,t)),a}class ls{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:e},parts:t}=this._$AD,o=(a?.creationScope??Be).importNode(e,!0);Oe.currentNode=o;let c=Oe.nextNode(),i=0,l=0,d=t[0];for(;d!==void 0;){if(i===d.index){let u;d.type===2?u=new ot(c,c.nextSibling,this,a):d.type===1?u=new d.ctor(c,d.name,d.strings,this,a):d.type===6&&(u=new gs(c,this,a)),this._$AV.push(u),d=t[++l]}i!==d?.index&&(c=Oe.nextNode(),i++)}return Oe.currentNode=Be,o}p(a){let e=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(a,t,e),e+=t.strings.length-2):t._$AI(a[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,t,o){this.type=2,this._$AH=Fr,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=Fe(this,a,e),Rt(a)?a===Fr||a==null||a===""?(this._$AH!==Fr&&this._$AR(),this._$AH=Fr):a!==this._$AH&&a!==tt&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):rs(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==Fr&&Rt(this._$AH)?this._$AA.nextSibling.data=a:this.T(Be.createTextNode(a)),this._$AH=a}$(a){const{values:e,_$litType$:t}=a,o=typeof t=="number"?this._$AC(a):(t.el===void 0&&(t.el=Pt.createElement(is(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(e);else{const c=new ls(o,this),i=c.u(this.options);c.p(e),this.T(i),this._$AH=c}}_$AC(a){let e=cs.get(a.strings);return e===void 0&&cs.set(a.strings,e=new Pt(a)),e}k(a){nc(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,o=0;for(const c of a)o===e.length?e.push(t=new ot(this.O(jt()),this.O(jt()),this,this.options)):t=e[o],t._$AI(c),o++;o<e.length&&(this._$AR(t&&t._$AB.nextSibling,o),e.length=o)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){const t=a.nextSibling;a.remove(),a=t}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}}class Mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,t,o,c){this.type=1,this._$AH=Fr,this._$AN=void 0,this.element=a,this.name=e,this._$AM=o,this.options=c,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=Fr}_$AI(a,e=this,t,o){const c=this.strings;let i=!1;if(c===void 0)a=Fe(this,a,e,0),i=!Rt(a)||a!==this._$AH&&a!==tt,i&&(this._$AH=a);else{const l=a;let d,u;for(a=c[0],d=0;d<c.length-1;d++)u=Fe(this,l[t+d],e,d),u===tt&&(u=this._$AH[d]),i||=!Rt(u)||u!==this._$AH[d],u===Fr?a=Fr:a!==Fr&&(a+=(u??"")+c[d+1]),this._$AH[d]=u}i&&!o&&this.j(a)}j(a){a===Fr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class ds extends Mt{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===Fr?void 0:a}}class us extends Mt{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==Fr)}}class hs extends Mt{constructor(a,e,t,o,c){super(a,e,t,o,c),this.type=5}_$AI(a,e=this){if((a=Fe(this,a,e,0)??Fr)===tt)return;const t=this._$AH,o=a===Fr&&t!==Fr||a.capture!==t.capture||a.once!==t.once||a.passive!==t.passive,c=a!==Fr&&(t===Fr||o);o&&this.element.removeEventListener(this.name,this,t),c&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class gs{constructor(a,e,t){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(a){Fe(this,a)}}const Im={M:tc,P:le,A:oc,C:1,L:ss,R:ls,D:rs,V:Fe,I:ot,H:Mt,N:us,U:hs,B:ds,F:gs},yu=ec.litHtmlPolyfillSupport;yu?.(Pt,ot),(ec.litHtmlVersions??=[]).push("3.3.1");const xu=(r,a,e)=>{const t=e?.renderBefore??a;let o=t._$litPart$;if(o===void 0){const c=e?.renderBefore??null;t._$litPart$=o=new ot(a.insertBefore(jt(),c),c,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sc=globalThis;class Ho extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=xu(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}}Ho._$litElement$=!0,Ho.finalized=!0,sc.litElementHydrateSupport?.({LitElement:Ho});const ku=sc.litElementPolyfillSupport;ku?.({LitElement:Ho});const jm={_$AK:(r,a,e)=>{r._$AK(a,e)},_$AL:r=>r._$AL};(sc.litElementVersions??=[]).push("4.2.1");const wu=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 2lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,lc={};function sr(r,a){if(typeof document<"u"&&a?.styleSheet){const e=lc[r];lc[r]=a.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==e),a.styleSheet]}}function Cu(r){const a=Object.values(lc),e=document.adoptedStyleSheets.filter(t=>a.includes(t));if(r.adoptedStyleSheets){const t=e.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function Au(r){if(typeof CSSStyleSheet<"u"){const a=new CSSStyleSheet;a.replaceSync(wu),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(a)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,a]))}}const Su=r=>r?.trim().charAt(0)??void 0,zu=(r,a)=>{let e=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)e=(e+r.charCodeAt(o))%(a??33);return e},Eu=(r,a,e)=>a?.length?r?.trim()===""?e||a[0]:a[zu(r,a.length)]||e||a[0]:e,vs=X(Ie,["blue","orange","mint","red","yellow","green","maroon","purple"]),_u=X(Ie,["neutral","white","black"]),Vo=X(ea,["lg","md","sm","xs"]),Tu=[...Vo,"profile-sm","profile-md","profile-lg"],Iu=Bo,ju=zt,Ru=Vo,Lu=Vo,Pu=Vo,j=s`--arc•input•mask`,v=s`--arc•size`,z=s`--arc•space`,gr=s`--arc•avatar`,Nr=s`${gr}•chars`,dc=s`

  &[data-size=lg] {
    ${gr}•font•size: var(${v}•16);
    ${gr}•size: 2.5em; /* target: 40px @ 100% */
    ${Nr}•1: var(${v}•16);
    ${Nr}•2: var(${v}•14);
    ${Nr}•3: var(${v}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${gr}•font•size: var(${v}•14);
    ${gr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${Nr}•1: var(${v}•14);
    ${Nr}•2: var(${v}•12);
    ${Nr}•3: var(${v}•10);
  }

  &[data-size=sm] {
    ${gr}•font•size: var(${v}•12);
    ${gr}•size: 2em; /* target: 24px @ 100% */
    ${Nr}•1: var(${v}•12);
    ${Nr}•2: var(${v}•10);
    ${Nr}•3: var(${v}•8);
  }

  &[data-size=xs] {
    ${gr}•font•size: var(${v}•10);
    ${gr}•size: 2em; /* target: 20px @ 100% */
    ${Nr}•1: var(${v}•10);
    ${Nr}•2: var(${v}•8);
    ${Nr}•3: var(${v}•6);
  }

`,Mu=s`

  &[data-size=profile-lg] {
    ${gr}•font•size: var(${v}•40);
    ${gr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${gr}•font•size: var(${v}•32);
    ${gr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${gr}•font•size: var(${v}•28);
    ${gr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,ps=s`

  [arc-avatar] {
    ${gr}•font•size: inherit;
    ${gr}•size: inherit;
    ${Nr}•1: inherit;
    ${Nr}•2: inherit;
    ${Nr}•3: inherit;
  }

`,Ne=s`${gr}•fg`,ga=s`${gr}•bg`,Bu=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${Ne}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${ga}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${ga}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${ga}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${ga}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${ga}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${ga}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${ga}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${ga}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${Ne}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${ga}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${Ne}: var(--arc-color-fg-secondary);
      ${ga}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${Ne}: var(--arc-color-mono-black);
      ${ga}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${dc}
    ${Mu}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${gr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${gr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${Nr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${Nr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${Nr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${gr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${ga}));
      --arc-button-color: var(--arc-avatar-color, var(${Ne}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${gr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${Ne}: transparent;
        ${ga}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${ga});
      color: var(${Ne});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${gr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${gr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Du=({children:r,initial:a,color:e,...t})=>(0,n.jsx)("span",{...t,"data-element":"initial","data-color":e,children:r||a}),Ou=({isLoaded:r,hasError:a,onLoad:e,onError:t,...o})=>{const c=!r&&""||void 0,i=a&&""||void 0,l=!r||a||void 0;return(0,n.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":c,"data-has-error":i,onLoad:e,onError:t})},uc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),hc=r=>(0,n.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,n.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),gc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),vc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),pc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),fc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),mc=r=>(0,n.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),bc=r=>(0,n.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Fu;const Nu="fa-width-auto",fs="fa-fw",Hu="arc-fw",ms="arc-aw",Vu=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,Uu={"arc-svg logo-articulate":(0,n.jsx)(uc,{}),"arc-svg product-ai":(0,n.jsx)(hc,{}),"arc-svg product-peek":(0,n.jsx)(gc,{}),"arc-svg product-reach":(0,n.jsx)(vc,{}),"arc-svg product-review":(0,n.jsx)(pc,{}),"arc-svg product-rise":(0,n.jsx)(fc,{}),"arc-svg product-storyline":(0,n.jsx)(mc,{}),"arc-svg product-studio":(0,n.jsx)(bc,{})},Pm=r=>r&&r.length>0&&r?.includes("arc-svg")?Uu[r]:Fu("span",{className:r}),bs=r=>{const a=r.includes(Nu),e=r.includes(fs),t=r.includes(Hu),o=r.includes(ms);return{hasFaAutoWidth:a,hasFaFixedWidth:e,hasArcFixedWidth:t,hasArcAutoWidth:o}},$s=r=>((0,h.isValidElement)(r)&&r.type===ir?r.props.icon:r)??void 0,$c=r=>{const a=$s(r);if(typeof a!="string")return a;const{hasFaFixedWidth:e,hasArcFixedWidth:t,hasArcAutoWidth:o}=bs(a);return!e&&!t&&!o?`${a} ${ms}`:a},Wu=r=>{const a=$s(r);if(typeof a!="string")return a;let e=a;const{hasArcFixedWidth:t,hasFaFixedWidth:o}=bs(e);return t&&!o&&(e=`${e} ${fs}`),e},Ku=s`--arc•icon`,de=s`${Ku}•fg`,Gu=s`
@layer arc-components {

[arc-icon] {
  ${de}: currentcolor;

  color: var(--arc-icon-color, var(${de}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${de}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${de}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${de}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${de}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${de}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${de}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${de}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,qu=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Yu=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Zu=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Xu=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),Ju=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Qu=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),rh=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),ah=r=>(0,n.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),ir=({children:r,icon:a="fa-regular fa-circle-dashed",color:e,size:t,style:o,gradient:c,...i})=>{const l={...o,"--arc-icon-size":Vu(t),"--arc-icon-color":e},d=!!(i["aria-label"]||i["aria-labelledby"]),u=Wu(a),g=typeof u=="string"&&u.length>0?(0,n.jsx)("span",{className:u}):u;return(0,n.jsx)("span",{"aria-hidden":!d||void 0,...i,"arc-icon":"",style:l,"arc-gradient":c,children:r||g})};sr("ArcIcon",Gu),ir.Articulate=qu,ir.AI=Yu,ir.Peek=Zu,ir.Reach=Xu,ir.Review=Ju,ir.Rise=Qu,ir.Storyline=rh,ir.Studio=ah,ir.SVGArticulate=uc,ir.SVGAI=hc,ir.SVGPeek=gc,ir.SVGReach=vc,ir.SVGReview=pc,ir.SVGRise=fc,ir.SVGStoryline=mc,ir.SVGStudio=bc;const eh=({children:r,icon:a,color:e,...t})=>(0,n.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,n.jsx)(ir,{icon:a})}),ys="blue",xs="neutral",th="fa-solid fa-user arc-aw",yc=(0,h.forwardRef)(({children:r,size:a,color:e,isActive:t=!0,isAnonymous:o,alt:c,src:i,name:l,email:d,...u},g)=>{const[f,p]=(0,h.useState)(!1),[m,b]=(0,h.useState)(!1),$=D=>{p(!0),b(!1),u.onLoad?.(D)},w=D=>{p(!1),b(!0),u.onError?.(D)},_=Su(l||d),y=!!_,S=o||(!f||m)&&!y,k=!S&&!!i&&!m||void 0,T=(S&&xs||void 0)??(e||void 0)??Eu(String(d||l||void 0),vs,ys)??ys,B={src:i,alt:c,isLoaded:f,hasError:m,onLoad:$,onError:w};return(0,h.useEffect)(()=>{S&&p(!1)},[S]),(0,n.jsx)("span",{...u,ref:g,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":a,"aria-label":(u.title??l??d)||void 0,children:r||(S?(0,n.jsx)(eh,{icon:th,color:xs}):(0,n.jsxs)(n.Fragment,{children:[k&&(0,n.jsx)(Ou,{...B}),y&&(0,n.jsx)(Du,{initial:_,color:T})]}))})});sr("ArcAvatar",Bu);const Xr=s`${gr}•text`,He=s`${gr}•subtext`,nt=s`${gr}•gap`,oh=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Xr}•font•size: var(${v}•14);
    ${He}•font•size: var(${v}•12);
    ${nt}: var(${v}•8);

    ${Xr}•overflow: unset;
    ${Xr}•text•overflow: unset;
    ${Xr}•white•space: unset;

    &[data-overflow=truncate] {
      ${Xr}•overflow: hidden;
      ${Xr}•text•overflow: ellipsis;
      ${Xr}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Xr}•font•size: 1em;
      ${He}•font•size: 0.875em;
      ${nt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Xr}•font•size: var(--arc-font-size-14);
      ${He}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Xr}•font•size: var(--arc-font-size-14);
      ${He}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Xr}•font•size: var(--arc-font-size-14);
      ${He}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Xr}•font•size: var(--arc-font-size-12);
      ${He}•font•size: var(--arc-font-size-12);
      ${nt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${nt}: var(${v}•12); }
    &[data-gap=sm] { ${nt}: var(${v}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Xr}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${nt});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${He}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Xr}•overflow);
      text-overflow: var(${Xr}•text•overflow);
      white-space: var(${Xr}•white•space);
    }
  }

}
`,nh="Anonymous",xc=({children:r,avatar:a={},subtext:e,size:t,gapSize:o,overflow:c,isStrong:i,...l})=>{const d=a.anonymousName||nh,u=a.name||a.email||a.src,g=a.name||a.email,f=a.isAnonymous||!u,p=r||f?d:g,m=o!=="inherit"?o:void 0,b=c!=="inherit"?c:void 0;return(0,n.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":m,"data-overflow":b,"is-strong":i?"":void 0,children:[(0,n.jsx)(yc,{...a,isAnonymous:f,size:t}),(0,n.jsxs)("span",{"data-element":"text",children:[p,e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};sr("ArcAvatarText",oh);const ch=s`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${dc}
    ${ps}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,ih=({size:r="md",...a})=>(0,n.jsx)("div",{...a,"arc-avatar-pile":"","data-size":r});sr("ArcAvatarPile",ch);const Bt=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Bt).join(""):(0,h.isValidElement)(r)?Bt(r.props.children):"",ks={},sh=(r="id")=>{const a=(ks[r]??0)+1;return ks[r]=a,`${r}-${a}`},Rr=(r,a="id")=>{const e=(0,h.useId)();return r??`${a}-${e}`},kc=[...je],wc=[...ie],lh=[...Qe],ws=X(Er,["common"]),dh=X(Er,["ai","brand"]),Cc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],Ac=["ignore","flip"],Cs=["compact","comfortable"],Dt=(r,a=1/0,e=" ")=>[...r].flat(a)?.filter(Boolean)?.join(e),va={popover:kc[0],anchorAt:Cc[13],boundary:Ac[0],tryFallbacks:!1,variant:ws[0],scheme:wc[0],density:Cs[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},Sc=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),uh=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),zc={canAnchor:Sc(),canAnchoredContainers:uh()},As=["center","nw-corner","ne-corner","se-corner","sw-corner"],Ss=({canHaveTail:r,tailSize:a})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const e=Math.abs(Number(a||va.tailSize)),t=e>0?e:va.tailSize;return{cssTailVar:t===va.tailSize?"":`${t}px`,floatingTailPx:t}},Uo=typeof window>"u"?h.useEffect:h.useLayoutEffect,zs=(r,a="toggle",e=document)=>{const t=e.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[a]()},Ot=new WeakMap,Ec=r=>{const a=String(r??"").trim();if(a==="none")return"none";let e=a.replace(/[^\w-]/g,"-");for(;e.startsWith("-");)e=e.slice(1);for(;e.endsWith("-");)e=e.slice(0,-1);return e?`--${e}`:"--"},Ft=r=>{const a=Ec(r);return a==="none"?null:a},Es=(r,a)=>{const e=Ft(a);if(!e)return()=>{};let t=Ot.get(r);return t||(t=new Set,Ot.set(r,t)),t.has(e)?()=>{}:(t.add(e),r.style.setProperty("anchor-name",Dt([...t],1/0,", ")),()=>{const o=Ot.get(r);if(o){if(o.delete(e),o.size===0){Ot.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Dt([...o],1/0,", "))}})},_s=r=>r==="start"||r==="end"?r:"center",hh=r=>{const a=r.split("-")[0];return a==="top"||a==="right"||a==="bottom"||a==="left"?a:null},Ts=r=>{const a=hh(r),e=_s(r.split("-")[1]);switch(a){case"top":return{block:"start",inline:e};case"bottom":return{block:"end",inline:e};case"left":return{block:e,inline:"start"};case"right":return{block:e,inline:"end"};default:return{block:"center",inline:"center"}}},Is=(r,a)=>r!=="center"&&a!=="center"&&r!==a,js=(r,a)=>{const e=Ts(r),t=Ts(a),o=Is(e.block,t.block),c=Is(e.inline,t.inline);return o&&c?"flip-block-inline":o?"flip-block":c?"flip-inline":""},gh={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Rs=r=>{r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("position"),r.style.removeProperty("margin"),delete r.dataset.fallbacks},vh=[{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("top"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("bottom"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("bottom")&&e.includes("top"),value:1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("left"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("right"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("right")&&e.includes("left"),value:1}],Ls=(r,a,e)=>vh.find(t=>t.test(r,a,e))?.value||0,ph=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:t,offsetPx:o,tailSizePx:c,hasTail:i,isOpen:l})=>{Uo(()=>{if(!(l&&!Sc()&&!!r&&!!a)){a&&Rs(a);return}const u=r,g=a,f=gh[e];let p=!0,m;return(async()=>{try{const{autoUpdate:w,computePosition:_,flip:y,offset:S}=await ha.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(ha.bind(ha,40153));if(!p)return;const k=i?Math.max(0,c)*(Math.sqrt(2)/2):0,T=[S(o)];t&&T.push(y({fallbackStrategy:"bestFit"}));const B=async()=>{try{const D=await _(u,g,{placement:f,strategy:"fixed",middleware:T}),F=D.x+k*Ls("x",D.placement,f),I=D.y+k*Ls("y",D.placement,f);if(g.style.left=`${F}px`,g.style.top=`${I}px`,!i||!t){delete g.dataset.fallbacks;return}const A=js(f,D.placement);A?g.dataset.fallbacks=A:delete g.dataset.fallbacks}catch{}};m=w(u,g,B),await B()}catch{}})(),()=>{p=!1,m?.(),Rs(g)}},[e,r,i,l,o,a,c,t])},Wo=1,ct=2,fh=[{test:(r,a)=>a.top>=r.bottom+Wo,value:"bottom"},{test:(r,a)=>a.bottom<=r.top-Wo,value:"top"},{test:(r,a)=>a.left>=r.right+Wo,value:"right"},{test:(r,a)=>a.right<=r.left-Wo,value:"left"}],Nt=r=>{delete r.dataset.fallbacks};let _c;const mh=()=>(_c||(_c=ha.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(ha.bind(ha,40153))),_c),Ko=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),bh=(r,a,e,t)=>{const o=Ko(a),c=Ko(e);if(r==="top"||r==="bottom"){const u=Math.abs(t==="rtl"?e.right-a.right:e.left-a.left),g=Math.abs(t==="rtl"?e.left-a.left:e.right-a.right),f=Math.abs(c.x-o.x);return Math.abs(u-g)<=ct&&f<=ct||f+ct<Math.min(u,g)?"center":u<=g?"start":"end"}const i=Math.abs(e.top-a.top),l=Math.abs(e.bottom-a.bottom),d=Math.abs(c.y-o.y);return Math.abs(i-l)<=ct&&d<=ct||d+ct<Math.min(i,l)?"center":i<=l?"start":"end"},$h=(r,a,e,t)=>{const o=fh.find(d=>d.test(a,e));let c;if(o)c=o.value;else{const d=Ko(a),u=Ko(e),g=u.y-d.y,f=u.x-d.x,p=Math.min(a.height,e.height)*.1;Math.abs(g)>p?c=g>=0?"bottom":"top":c=f>=0?"right":"left"}if(_s(r.split("-")[1])==="center")return c;const l=bh(c,a,e,t);return`${c}-${l}`},yh=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:t,isOpen:o,hasTail:c})=>{Uo(()=>{if(!a||!zc.canAnchor)return;if(!c||!t||!o||zc.canAnchoredContainers||!r){Nt(a);return}const i=e;if(i==="center"||i.includes("corner")){Nt(a);return}const l=r,d=a;let u=!0,g;const f=()=>{const m=l.getBoundingClientRect(),b=d.getBoundingClientRect(),$=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",w=$h(i,m,b,$),_=js(i,w);i===w?Nt(d):_?d.dataset.fallbacks=_:Nt(d)};return(async()=>{try{const{autoUpdate:b}=await mh();if(!u)return;g=b(l,d,f),f()}catch{}})(),()=>{u=!1,g?.(),Nt(d)}},[e,r,c,o,a,t])},Go=r=>typeof r=="string",Ps=r=>r!==null&&typeof r=="object",Ms=(r,a=" ")=>r.split(a).map(e=>e.trim()).filter(Boolean),xh=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,Tc=(0,h.forwardRef)(({progress:r,...a},e)=>(0,n.jsxs)("svg",{...a,ref:e,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,n.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,n.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Tc.displayName="ArcSpinner",sr("ArcSpinner",xh);const kh=(...r)=>console.log(...r),Bs=(...r)=>console.warn(...r),wh=(...r)=>console.error(...r),it=s`--arc•icon•text`,Ht=s`${it}•font•size`,Ds=s`${it}•icon`,Ic=s`${it}•text`,Os=s`${it}•subtext`,Da=s`${it}•fg`,ue=s`${it}•gap`,xe=s`${Ds}•size`,Fs=s`${Ds}•vertical•align`,Vt=s`${Ic}•overflow`,qo=s`${Ic}•text•overflow`,Yo=s`${Ic}•white•space`,Zo=s`${Os}•font•size`,Ns=s`${Os}•fg`,Ch=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${Da}: currentcolor;
  }

  &[data-variant=primary] {
    ${Da}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${Da}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${Da}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${Da}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${Da}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${Da}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${Da}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${Da}: var(--arc-color-fg-critical-mid);
  }

`,Ah=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Ht}: 1em;
    ${Zo}: 0.75em;
    ${xe}: 1em;
    ${ue}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Ht}: var(--arc-font-size-14);
    ${Zo}: var(--arc-font-size-12);
    ${ue}: var(${z}•3);
  }

  &[data-size=sm] {
    ${Ht}: var(--arc-font-size-12);
    ${Zo}: var(--arc-font-size-12);
    ${ue}: var(${z}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${ue}: var(${z}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${ue}: var(${z}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${ue}: var(${z}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${xe}: var(${v}•24); }
  &[icon-size=lg] { ${xe}: var(${v}•20); }
  &[icon-size=md] { ${xe}: var(${v}•16); }
  &[icon-size=sm] { ${xe}: var(${v}•14); }
  &[icon-size=xs] { ${xe}: var(${v}•12); }
`,Sh=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Ns}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${Da}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${xe}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Vt}: unset;
    ${qo}: unset;
    ${Yo}: unset;

    ${Fs}: calc((var(${xe}) - var(${Ht})) / -2);

    &:has(svg) { ${Fs}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Vt}: visible;
    ${qo}: unset;
    ${Yo}: normal;

    &[data-overflow=truncate] {
      ${Vt}: hidden;
      ${qo}: ellipsis;
      ${Yo}: nowrap;
    }
  }

`,zh=s`
@layer arc-components {

  [arc-icon-text] {
    ${Ch}
    ${Ah}
    ${Sh}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Ht}));
    color: var(--arc-icon-text-text-color, var(${Da}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;

      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block);
        width: var(--arc-icon-text-svg-width, 1.25em);
        height: var(--arc-icon-text-svg-height, auto);
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom);
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${ue}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Vt}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Zo}));
        color: var(--arc-icon-text-subtext-color, var(${Ns}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Vt}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${qo}));
        white-space: var(--arc-icon-text-white-space, var(${Yo}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${ue})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${ue})); }
      [data-element=subtext] { display: contents; }
    }
  }
}

`,Eh=X(Er,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Jr=({children:r,layout:a="gutter",size:e="inherit",variant:t="inherit",tag:o="span",icon:c,iconTooltip:i,text:l,subtext:d,gradient:u,overflow:g,iconSize:f,gapSize:p,isFlipped:m=!1,isStrong:b=!1,...$})=>{const w=r||l,_=!!c,y=!!w,S=a==="gutter",k=a==="inline",T=_&&(!m||S),B=_&&y&&m&&k,D=!!f&&f!=="inherit",F=D&&Re.includes(f)?f:void 0,I=D&&!Re.includes(f)?f:void 0,A=p!=="inherit"?p:void 0,q=g!=="inherit"?g:void 0,V=$c(c),Q=typeof V=="string"?(0,n.jsx)(ir,{icon:V,size:I,gradient:u}):V,Y=i?(0,n.jsx)(nn,{text:i,children:Q}):Q;return(0,n.jsxs)(o,{...$,"arc-icon-text":"","data-variant":t,"data-layout":a,"data-overflow":q,"data-size":e,"data-gap":A,"icon-size":F,"is-flipped":m?"":void 0,"is-strong":b?"":void 0,children:[T&&(0,n.jsx)("span",{"data-element":"icon",children:Y}),y&&(0,n.jsxs)("span",{"data-element":"text",children:[w,!!d&&(S?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("small",{"data-element":"subtext",children:d})]}):(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("span",{"data-element":"subtext",children:d})]}))]}),B&&(0,n.jsx)("span",{"data-element":"icon",children:Y})]})};sr("ArcIconText",zh);const Oa={...va,popover:kc[2],anchorAt:Cc[2],boundary:Ac[1],tryFallbacks:!0,scheme:wc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Xo=new WeakSet,_h=100,Th=100;let jc=!0,Rc=null;const Ih=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),jh=r=>r instanceof Element?Ih?r.matches(":focus-visible")===!0:jc:!1,Lc=new WeakMap,Pc=new WeakMap,Ut=new Set,Jo=(r,a)=>{const e=r.get(a);e!=null&&(clearTimeout(e),r.delete(a))},Hs=(r,a,e,t)=>{const o=window.setTimeout(()=>{t(),r.delete(a)},e);r.set(a,o)},Vs="[aria-describedby]",Rh=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,Us=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&Rh(r),Lh=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Ph=r=>r?.match(/\S+/g)??[],Mc=(r,a)=>{const e=Ba(a??document.documentElement);if(!e)return null;const t=e.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},Mh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.(Vs);if(a){const t=a.getAttribute("aria-describedby")??"";if(t)return{anchor:a.closest?.("label,[arc-label]")??a,tooltipId:t}}let e=r;for(;e;){if(Lh(e)){const t=e.querySelector?.(Vs),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:e,tooltipId:o}}e=e.parentElement}return null},Bh=r=>{if(!(r instanceof Element))return null;const a=r.closest?.('[role="tooltip"][popover]')??null;return a instanceof HTMLElement?a:null},Dh=r=>r?.id?Mc(r.id,r):null,Oh=r=>{const a=Bh(r),e=Mh(r);if(!e&&a){const d=Dh(a);return!d||!a.id?null:{anchor:d,tooltip:a}}if(!e)return null;const{anchor:t,tooltipId:o}=e;if(!o)return null;const c=Ba(r);if(!c)return null;const i=Ph(o),l=a??i.map(d=>c.getElementById(d)).find(d=>Us(d))??null;return Us(l)?{anchor:t,tooltip:l}:null},Fh=(r,a,e)=>{const t=e instanceof Element?e:null;if(!t)return!1;const o=r===t||r.contains(t),c=a===t||a.contains(t);return o||c},Ws=r=>{r.isConnected&&(r.showPopover?.(),Ut.add(r))},Ks=r=>{r.isConnected&&(r.hidePopover?.(),Ut.delete(r))},Nh=(r,a)=>{if(Jo(Pc,r),Jo(Lc,r),!a){Ws(r);return}Hs(Lc,r,_h,()=>Ws(r))},Bc=(r,a)=>{if(Jo(Lc,r),Jo(Pc,r),!a){Ks(r);return}Hs(Pc,r,Th,()=>Ks(r))},Hh=()=>{Ut.forEach(r=>{Bc(r,!1)})},Wt=(r,a,e,t)=>{const o=Oh(a);if(!o)return;const{anchor:c,tooltip:i}=o;if(r){Nh(i,t);return}Fh(c,i,e)||Bc(i,t)};let Qo=null,rn=null,an=null,en=null,tn=null,on=null,st=null,Kt=null;const Gs=r=>{if(!r&&typeof document>"u")return;const a=r?Ba(r):document;if(!a||Xo.has(a))return;on=t=>{jc=!1,Rc=t.target},st=()=>{Rc=null},Qo=t=>Wt(!0,t.target,void 0,!0),an=t=>Wt(!1,t.target,t.relatedTarget,!0),rn=t=>{jh(t.target)&&Wt(!0,t.target,void 0,!1)},en=t=>{const o=t.relatedTarget??Rc;Wt(!1,t.target,o,!1)},tn=t=>{t.key==="Tab"&&(jc=!0),t.key==="Escape"&&(Ut.size>0&&t.preventDefault(),Wt(!1,t.target,void 0,!1),Ut.forEach(o=>Bc(o,!1)))},Kt=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}Hh()}},[["pointerdown",on],["pointerup",st],["pointercancel",st],["pointerover",Qo],["focusin",rn],["pointerout",an],["focusout",en],["keydown",tn]].forEach(([t,o])=>{a.addEventListener(t,o)}),a.addEventListener("toggle",Kt,!0),Xo.add(a)},Vh=()=>{if(!Xo.has(document)||typeof document>"u")return;[["pointerdown",on],["pointerup",st],["pointercancel",st],["pointerover",Qo],["focusin",rn],["pointerout",an],["focusout",en],["keydown",tn]].forEach(([a,e])=>{e&&document.removeEventListener(a,e)}),Kt&&document.removeEventListener("toggle",Kt,!0),Qo=null,rn=null,an=null,en=null,tn=null,on=null,st=null,Kt=null,Xo.delete(document)},Fa=s`--arc•tooltip`,qs=s`${Fa}•subtext`,Ys=s`${Fa}•slot`,Uh=s`
@layer arc-components {
  [arc-tooltip] {
    ${Fa}•width: max-content;
    ${Fa}•max•width: 20em;
    ${Fa}•font•size: var(${v}•12);
    ${Fa}•padding: var(${z}•10);
    ${qs}•spacing: var(${z}•6);
    ${Ys}•margin•top: var(${z}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${Fa}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${Fa}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${Fa}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${Fa}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${Fa}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${qs}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${Ys}•margin•top));
    }
  }
}
`,nn=(0,h.forwardRef)(({id:r,children:a,slot:e,isEnabled:t=Oa.isEnabled,popover:o=Oa.popover,variant:c=Oa.variant,anchorAt:i=Oa.anchorAt,alternateAnchor:l,boundary:d=Oa.boundary,tryFallbacks:u=Oa.tryFallbacks,hasTail:g=Oa.hasTail,offset:f=Oa.offset,scheme:p=Oa.scheme,isStrong:m=Oa.isStrong,text:b,subtext:$,icon:w,isFlipped:_,...y},S)=>{const k=Rr(r,"arc-tooltip"),T=(0,h.useRef)(null);(0,h.useImperativeHandle)(S,()=>T.current);const B=V=>typeof V=="object"&&V!==null&&"tabIndex"in V,D=a,F=!!l;let I=null;(0,h.isValidElement)(D)?I=t?(0,h.cloneElement)(D,{"aria-describedby":k,...B(D.props)&&D.props.tabIndex!=null?{}:{tabIndex:0}}):D:!F&&typeof console<"u"&&Bs("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const A=(0,h.useMemo)(()=>()=>Mc(k,T.current),[k]),q=p==="auto"?void 0:p;return(0,h.useEffect)(()=>{if(t)try{Gs(T.current)}catch{}},[t]),(0,n.jsxs)(n.Fragment,{children:[I,t&&(0,n.jsxs)(he,{...y,"arc-tooltip":"",scheme:y?.isInverse?"inverse":q,role:"tooltip",id:k,ref:T,popover:o,anchorAt:i,tryFallbacks:u??d==="flip",variant:c,hasTail:g,offset:f,hidePopoverButton:!0,alternateAnchor:l??A,tag:y?.tag??"span",contentTag:y?.contentTag??"span",children:[b&&(0,n.jsx)(Jr,{"arc-tooltip-content":"",text:b,subtext:$,icon:w,isFlipped:_,isStrong:m,size:"inherit",variant:"inherit"}),e&&(0,n.jsx)("span",{"arc-tooltip-slot-content":"",children:e})]})]})});sr("ArcTooltip",Uh);const Wh=({isFloating:r,isOnMedia:a,shadow:e})=>[{condition:!r&&a,value:"light-md"},{condition:r&&!a,value:"lg"},{condition:r&&a,value:"light-lg"},{condition:r||e===!0,value:"lg"}],Kh=({isFloating:r,isOnMedia:a,shadow:e})=>Wh({isFloating:r,isOnMedia:a,shadow:e}).find(t=>t.condition)?.value??e,Gh=({layout:r,isFloating:a})=>[{condition:r==="icon",value:"icon"},{condition:a||r==="hug",value:"hug"},{condition:!a&&r==="fill",value:"fill"}],qh=({layout:r,isFloating:a})=>Gh({layout:r,isFloating:a}).find(e=>e.condition)?.value??r,Yh=({scheme:r,isInverse:a})=>[{condition:r==="auto",value:void 0},{condition:a,value:"inverse"},{condition:!0,value:r}],Zh=({scheme:r,isInverse:a})=>(Yh({scheme:r,isInverse:a}).find(t=>t.condition)?.value??r)==="auto"?void 0:r,Xh=X(St,["round","square","narrow"]),Jh=X(ea,["xxl","xl","lg","md","sm"]),Qh=X(La,["hug","fill","icon"]),Zs=X(Er,["common","neutral","ai","critical","alpha"]),Dc=[...ie],r0=[...jo],Xs=X(Ro,["primary","secondary","tertiary","plain","link-style"]),a0=[...Qe],e0={circle:"round"},Js=({shape:r})=>se(r,e0),Oc=X(Er,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Qs={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},t0=(()=>{const r=new Map;return Oc.forEach(a=>{const e=Qs[a],t=e.scheme==="inverse"?"inverse":"";r.set(`${e.variant}|${e.hierarchy}|${t}`,a)}),r})(),o0=r=>!!(r&&Oc.includes(r)),cn=r=>r!==void 0&&o0(r)?Qs[r]:void 0,rl=({variant:r})=>cn(r)?.variant??r,al=({variant:r,hierarchy:a})=>cn(r)?.hierarchy??a,el=({variant:r,isInverse:a,scheme:e})=>cn(r)?.scheme??Zh({scheme:e,isInverse:a}),n0={variant:Zs[0],hierarchy:Xs[0],scheme:Dc[0]},c0=({variant:r})=>{const a=cn(r);return a?{variant:a.variant,hierarchy:a.hierarchy,scheme:a.scheme??Dc[0]}:n0},i0=({variant:r,hierarchy:a,scheme:e})=>t0.get(`${r}|${a}|${e==="inverse"?"inverse":""}`),ya=s`60deg`,kr={purple:{50:s`light-dark(#fbf2ff, #210125)`,100:s`light-dark(#efccff, #540160)`,200:s`light-dark(#9c15ff, #ad44cb)`,300:s`light-dark(#680278, #ad44cb)`,400:s`light-dark(#5d3668, #c778de)`,500:s`light-dark(#37003f, #e3a7ff)`,600:s`light-dark(#27002c, #f9ebff)`},blue:{50:s`light-dark(#f4fbff, #00223b)`,100:s`light-dark(#d2f1fe, #02497d)`,200:s`light-dark(#1eb4fb, #169cfe)`,300:s`light-dark(#0179d0, #71bdfe)`,400:s`light-dark(#36648c, #84daff)`,500:s`light-dark(#004273, #b7eaff)`,600:s`light-dark(#012a48, #c2edff)`}},Gt=s`var(--arc-color-overlay-subtle)`,s0=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Gt};
  --arc-button-floating-bg-processing: ${Gt};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Gt};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Gt} linear-gradient(${ya}, transparent, ${Gt});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${ya}, transparent, transparent);
  --arc-button-gradient-ai-50: ${kr.purple[50]} linear-gradient(${ya}, transparent, ${kr.blue[50]});
  --arc-button-gradient-ai-100: ${kr.purple[100]} linear-gradient(${ya}, transparent, ${kr.blue[100]});
  --arc-button-gradient-ai-200: ${kr.purple[200]} linear-gradient(${ya}, transparent, ${kr.blue[200]});
  --arc-button-gradient-ai-300: ${kr.purple[300]} linear-gradient(${ya}, transparent, ${kr.blue[300]});
  --arc-button-gradient-ai-400: ${kr.purple[400]} linear-gradient(${ya}, transparent, ${kr.blue[400]});
  --arc-button-gradient-ai-500: ${kr.purple[500]} linear-gradient(${ya}, transparent, ${kr.blue[500]});
  --arc-button-gradient-ai-600: ${kr.purple[600]} linear-gradient(${ya}, transparent, ${kr.blue[600]});
}
`,l0=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,d0=s`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${kr.purple[50]};
  --arc-popover-ai-purple-200: ${kr.purple[200]};
  --arc-popover-ai-blue-50: ${kr.blue[50]};
  --arc-popover-ai-blue-200: ${kr.blue[200]};
}
`,u0=s`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${ya}, ${kr.purple[200]} -0.5em, ${kr.blue[200]});
}
`,h0=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${ya}, ${kr.purple[50]}, ${kr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${ya}, ${kr.purple[100]}, ${kr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${ya}, ${kr.purple[300]}, ${kr.blue[300]});
}
`,C=s`--arc•button`,E=s`${C}•fg`,x=s`${C}•bg`,H=s`${C}•edge`,vr=s`${C}•border`,lt=s`${C}•outline`,Na=s`${C}•label`,Qr=s`${C}•mask`,nr=s`${C}•spinner`,Lr=s`${C}•icon`,Gr=s`${Lr}•svg`,g0=s`
  &[data-size=xxl] {
    ${C}•font•size: var(${v}•16);
    ${C}•height: var(${v}•56);
    ${nr}•size: var(${v}•32);
    ${Lr}•size: var(${v}•20);
    ${Lr}•size•large: var(${v}•24);
    ${Gr}•size: var(${v}•25);
    ${Gr}•size•large: var(${v}•24);
    ${Na}•spacing: var(${v}•12);
    ${C}•spacing: var(${v}•16);
    ${C}•spacing•square: var(${v}•16);
    ${vr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${C}•font•size: var(${v}•14);
    ${C}•height: var(${v}•48);
    ${nr}•size: var(${v}•16);
    ${Lr}•size: var(${v}•16);
    ${Lr}•size•large: var(${v}•20);
    ${Gr}•size: var(${v}•20);
    ${Gr}•size•large: var(${v}•25);
    ${Na}•spacing: var(${v}•10);
    ${C}•spacing: var(${v}•14);
    ${C}•spacing•square: var(${v}•14);
    ${vr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${C}•font•size: var(${v}•14);
    ${C}•height: var(${v}•40);
    ${nr}•size: var(${v}•16);
    ${Lr}•size: var(${v}•16);
    ${Lr}•size•large: var(${v}•20);
    ${Gr}•size: var(${v}•20);
    ${Gr}•size•large: var(${v}•25);
    ${Na}•spacing: var(${v}•8);
    ${C}•spacing: var(${v}•12);
    ${C}•spacing•square: var(${v}•10);
    ${vr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] {
    ${C}•font•size: 1em;
    ${C}•height: 2.5em;
    ${nr}•size: 1.125em;
    ${Lr}•size: 1.125em;
    ${Lr}•size•large: 1.25em;
    ${Gr}•size: 1.25em;
    ${Gr}•size•large: 1.375em;
    ${Na}•spacing: 0.5em;
    ${C}•spacing: 0.75em;
    ${C}•spacing•square: 0.625em;
    ${vr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=md] {
    ${C}•font•size: var(${v}•14);
    ${C}•height: var(${v}•32);
    ${nr}•size: var(${v}•16);
    ${Lr}•size: var(${v}•14);
    ${Lr}•size•large: var(${v}•20);
    ${Gr}•size: var(${v}•18);
    ${Gr}•size•large: var(${v}•25);
    ${Na}•spacing: var(${v}•6);
    ${C}•spacing: var(${v}•10);
    ${C}•spacing•square: var(${v}•8);
    ${vr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${C}•font•size: var(${v}•12);
    ${C}•height: var(${v}•24);
    ${nr}•size: var(${v}•14);
    ${Lr}•size: var(${v}•12);
    ${Lr}•size•large: var(${v}•14);
    ${Gr}•size: var(${v}•15);
    ${Gr}•size•large: var(${v}•18);
    ${Na}•spacing: var(${v}•4);
    ${C}•spacing: var(${v}•8);
    ${C}•spacing•square: var(${v}•6);
    ${vr}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${C}•font•weight: normal;
    ${vr}•radius: 0.25em;
    ${C}•height: auto;
  }
`,v0=s`
  &[data-layout=hug] {
    ${C}•width: auto;
    ${C}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${C}•display: flex;
    ${C}•width: 100%;
    ${C}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${Lr}•width: auto;
  }

  &[data-layout=icon] {
    ${C}•aspect•ratio: 1 / 1;
    ${C}•min•width: min-content;
    ${C}•max•width: none;
    ${C}•spacing: var(${v}•0);

    ${Lr}•width: 1.25em;

    &[data-shape=narrow] {
      ${C}•aspect•ratio: auto;
      ${C}•spacing: var(${v}•2);
      ${Lr}•width: auto;
    }
  }

  &[data-shape=square] {
    ${C}•spacing: var(${C}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${vr}•radius: var(${vr}•radius•square);
  }

`,p0=s`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${E}: inherit;
    ${x}: transparent;
    ${H}: transparent;
    ${E}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${vr}•width: var(${v}•1);
    ${nr}•progress•color: var(--arc-color-border-brand-mid);
    ${nr}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${E}: var(--arc-color-fg-on-theme-heavy);
      ${x}: var(--arc-color-bg-theme-heavy);
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-on-theme-mid);
      ${E}•processing: var(--arc-color-fg-on-theme-stark);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-theme-stark);
      ${x}•active: var(--arc-color-bg-theme-mid);
      ${x}•processing: var(--arc-color-bg-theme-stark);
      ${x}•disabled: var(--arc-color-bg-disabled);

      ${nr}•progress•color: var(--arc-color-mono-white);
      ${nr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${E}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${H}: var(--arc-color-border-theme-heavy);

      ${E}•active: var(--arc-color-fg-secondary);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${H}•active: var(--arc-color-border-theme-mid);
      ${H}•processing: var(--arc-color-border-theme-subtle);
      ${H}•disabled: var(--arc-color-border-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${H}: var(--arc-color-border-mid);
        ${H}•hover: var(--arc-color-border-stark);
        ${H}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${E}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-secondary);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-muted);
      ${x}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${E}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•hover: var(--arc-color-alpha-heavy);
      ${E}•active: var(--arc-color-alpha-heavy);
      ${E}•processing: var(--arc-color-alpha-heavy);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: transparent;
      ${x}•active: transparent;
      ${x}•processing: transparent;
    }
  }

`,f0=s`
  &[data-variant=neutral] {
    ${vr}•width: var(${v}•1);
    ${nr}•progress•color: var(--arc-color-border-brand-mid);
    ${nr}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${E}: var(--arc-color-fg-primary);
      ${x}: transparent;
      ${H}: var(--arc-color-border-mid);

      ${E}•active: var(--arc-color-fg-secondary);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${E}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${H}: var(--arc-color-border-mid);

      ${E}•hover: var(--arc-color-fg-primary);
      ${E}•active: var(--arc-color-fg-secondary);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${H}•disabled: var(--arc-color-border-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: transparent;
      ${x}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${H}: var(--arc-color-border-mid);
        ${H}•hover: var(--arc-color-border-stark);
        ${H}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);
        ${x}•hover: var(--arc-button-floating-bg-hover);
        ${x}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${E}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-secondary);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-neutral-muted);
      ${x}•active: var(--arc-color-bg-neutral-subtle);
      ${x}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${E}: var(--arc-color-fg-neutral-stark);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•hover: var(--arc-color-fg-primary);
      ${E}•active: var(--arc-color-fg-neutral-mid);
      ${E}•processing: var(--arc-color-fg-secondary);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: transparent;
      ${x}•active: transparent;
      ${x}•processing: transparent;
    }
  }

`,m0=s`
  &[data-variant=ai] {
    ${E}•disabled: var(--arc-color-fg-disabled);
    ${H}•disabled: var(--arc-color-border-disabled);
    ${vr}•width: var(${v}•2);

    ${Qr}•bg: var(--arc-gradient-ai-200);
    ${Qr}•disabled: var(--arc-color-border-disabled);
    ${Qr}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${E}: var(--arc-color-fg-on-theme-stark);
      ${x}: var(--arc-button-gradient-ai-500) padding-box;
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-neutral-mid);
      ${E}•processing: var(--arc-color-fg-on-theme-heavy);
      ${E}•hover: var(--arc-color-fg-on-theme-heavy);

      ${x}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${x}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${x}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${x}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${nr}•progress•color: var(--arc-color-mono-white);
      ${nr}•base•color: var(--arc-color-alpha-white-30);

      ${Qr}•hover: var(--arc-gradient-ai-200);
      ${Qr}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${E}: var(--arc-color-fg-primary);
      ${x}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-neutral-stark);
      ${E}•processing: var(--arc-color-fg-primary);

      ${x}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${x}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${nr}•progress•color: var(--arc-color-border-brand-mid);

      ${Qr}•hover: var(--arc-gradient-ai-300);
      ${Qr}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${x}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,b0=s`
  &[data-variant=alpha] {
    ${vr}•width: var(${v}•1);
    ${nr}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${E}: var(--arc-color-mono-black);
      ${x}: var(--arc-color-mono-white);
      ${H}: transparent;

      ${E}•focus: var(--arc-color-mono-black);
      ${E}•active: var(--arc-color-alpha-black-60);
      ${E}•processing: var(--arc-color-mono-black);
      ${E}•disabled: var(--arc-color-alpha-black-60);

      ${x}•hover: var(--arc-color-alpha-white-70);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-40);
      ${x}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${E}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${H}: var(--arc-color-alpha-white-80);

      ${E}•active: var(--arc-color-alpha-white-80);
      ${E}•processing: var(--arc-color-alpha-white-95);
      ${E}•disabled: var(--arc-color-alpha-white-50);

      ${x}•hover: var(--arc-color-alpha-white-20);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-25);
      ${x}•disabled: transparent;

      ${H}•hover: var(--arc-color-alpha-white-100);
      ${H}•focus: var(--arc-color-alpha-white-80);
      ${H}•active: var(--arc-color-alpha-white-50);
      ${H}•processing: transparent;
      ${H}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${E}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•active: var(--arc-color-alpha-black-60);
      ${E}•processing: var(--arc-color-alpha-white-95);
      ${E}•disabled: var(--arc-color-alpha-white-50);

      ${x}•hover: var(--arc-color-alpha-white-20);
      ${x}•active: var(--arc-color-alpha-white-40);
      ${x}•processing: var(--arc-color-alpha-white-20);
      ${x}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${E}: var(--arc-color-alpha-white-95);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•hover: var(--arc-color-alpha-white-60);
      ${E}•active: var(--arc-color-alpha-white-40);
      ${E}•processing: var(--arc-color-alpha-white-95);
      ${E}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,$0=s`
  &[data-variant=critical] {
    ${vr}•width: var(${v}•1);
    ${nr}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${E}: var(--arc-color-fg-on-stark);
      ${x}: var(--arc-color-bg-critical-stark);
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-critical-subtle);
      ${E}•processing: var(--arc-color-fg-on-heavy);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-color-bg-critical-heavy);
      ${x}•active: var(--arc-color-bg-critical-heavy);
      ${x}•processing: var(--arc-color-bg-critical-heavy);
      ${x}•disabled: var(--arc-color-bg-disabled);

      ${nr}•progress•color: var(--arc-color-mono-white);
      ${nr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${E}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${H}: var(--arc-color-border-critical-stark);

      ${E}•active: var(--arc-color-fg-critical-subtle);
      ${E}•processing: var(--arc-color-fg-critical-stark);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-button-critical-bg-hover);
      ${x}•active: var(--arc-color-bg-critical-muted);
      ${x}•disabled: transparent;

      ${H}•active: var(--arc-color-border-critical-subtle);
      ${H}•processing: var(--arc-color-border-critical-stark);
      ${H}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${x}: var(--arc-button-floating-bg);
        ${x}•processing: var(--arc-button-floating-bg-processing);
        ${x}•disabled: var(--arc-button-floating-bg-disabled);
        ${x}•focus: var(--arc-button-floating-bg-focus);

        ${x}•hover: var(--arc-button-critical-floating-bg-hover);
        ${x}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${E}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•active: var(--arc-color-fg-critical-subtle);
      ${E}•processing: var(--arc-color-fg-critical-stark);
      ${E}•disabled: var(--arc-color-fg-disabled);

      ${x}•hover: var(--arc-button-critical-bg-hover);
      ${x}•active: var(--arc-color-bg-critical-subtle);
      ${x}•processing: var(--arc-color-bg-critical-muted);
      ${x}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${E}: var(--arc-color-fg-critical-stark);
      ${x}: transparent;
      ${H}: transparent;

      ${E}•hover: var(--arc-color-fg-critical-mid);
      ${E}•active: var(--arc-color-fg-critical-subtle);
      ${E}•processing: var(--arc-color-fg-critical-stark);
      ${E}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,y0=s`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${nr}•progress•color: var(--arc-color-mono-white);
    ${nr}•base•color: var(--arc-color-alpha-white-30);

    ${E}: var(--arc-color-mono-black);
    ${x}: var(--arc-color-alpha-white-70);
    ${H}: var(--arc-color-alpha-black-15);

    ${E}•active: var(--arc-color-alpha-black-50);
    ${E}•processing: var(--arc-color-alpha-black-50);
    ${E}•disabled: var(--arc-color-alpha-black-40);

    ${x}•hover: var(--arc-color-alpha-white-90);
    ${x}•focus: var(--arc-color-alpha-white-70);
    ${x}•active: var(--arc-color-alpha-white-70);
    ${x}•disabled: var(--arc-color-alpha-white-60);
    ${x}•processing: var(--arc-color-alpha-white-60);

    ${H}•active: var(--arc-color-alpha-black-10);
    ${H}•disabled: var(--arc-color-alpha-black-10);
  }
`,x0=s`
  ${C}•color: var(${E});
  ${C}•background: var(${x});
  ${C}•font•weight: var(--arc-font-weight-600);
  ${C}•cursor: var(--arc-button-cursor, pointer);
  ${C}•padding: 0 var(${C}•spacing);
  ${C}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap' */
  ${Na}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Na}•spacing)));

  ${vr}•color: var(${H});
  ${vr}: var(${vr}•width) solid var(${vr}•color, transparent);
  ${vr}•radius: var(--arc-border-radius-pill);

  ${lt}: var(--arc-border-width-md) solid var(${lt}•color, transparent);
  ${lt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${nr}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${nr}•circle•color: var(--arc-button-color, var(${nr}•base•color, var(--arc-color-alpha-mid)));
  ${nr}•circle•opacity: var(--arc-alpha-100);

  ${C}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${Lr}•size);

  ${Gr}•width: var(${Gr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Lr}•size•large);

    [arc-button-icon]:has(svg) {
      ${Gr}•width: var(${Gr}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${nr}•size);
  --arc-spinner-progress-color: var(${nr}•progress•color);
  --arc-spinner-circle-color: var(${nr}•circle•color);
  --arc-spinner-circle-opacity: var(${nr}•circle•opacity);
  --arc-spinner-position: var(${nr}•position, absolute);
  --arc-spinner-inset: var(${nr}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${nr}•translate, -50% -50%);

`,k0=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${C}•position: relative;
  }

  &[is-disabled] {
    ${C}•color: var(${E}•disabled, var(${E}));
    ${C}•background: var(${x}•disabled, var(${x}));
    ${vr}•color: var(${H}•disabled, var(${H}));
    ${C}•opacity: var(--arc-button-disabled-opacity, unset);
    ${C}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${Qr}•bg: var(${Qr}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${C}•color: var(${E}•hover, var(${E}));
      ${C}•background: var(${x}•hover, var(${x}));
      ${vr}•color: var(${H}•hover, var(${H}));
      ${Qr}•bg: var(${Qr}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${C}•color: var(${E}•active, var(${E}));
      ${C}•background: var(${x}•active, var(${x}));
      ${vr}•color: var(${H}•active, var(${H}));
      ${Qr}•bg: var(${Qr}•active);
    }
  }

  &[is-processing] {
    ${C}•content•visibility: hidden;
    ${C}•content•opacity: 0;

    /* spinner svg position controls */
    ${nr}•position: absolute;
    ${nr}•inset: 50% auto auto 50%;
    ${nr}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${C}•content•visibility: visible;

    /* spinner svg position controls */
    ${nr}•position: relative;
    ${nr}•inset: 0;
    ${nr}•translate: 0;
    ${nr}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${C}•opacity: var(--arc-button-processing-opacity, unset);
    ${C}•cursor: var(--arc-button-processing-cursor, default);
    ${Qr}•bg: var(${Qr}•processing);

    ${C}•color: var(${E}•processing, var(${E}));
    ${C}•background: var(${x}•processing, var(${x}));
    ${vr}•color: var(${H}•processing, var(${H}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${C}•color: var(${E}•focus, var(${E}));
    ${C}•background: var(${x}•focus, var(${x}));
    ${vr}•color: var(${H}•focus, var(${H}));
    ${lt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,w0=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${s0}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${g0}
    ${v0}
    ${p0}
    ${f0}
    ${m0}
    ${b0}
    ${$0}
    ${y0}

    /* CORE VARIABLES ----------------------------------------------• */
    ${x0}
    ${k0}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${C}•position: fixed;
      ${C}•margin: 0;
      ${C}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Na}•padding: unset;
      ${C}•padding: unset;
      ${C}•height: unset;
      ${vr}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(${Na}•spacing);
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${C}•font•weight: inherit;
      ${C}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${C}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${C}•cursor));
    position: var(--arc-button-position, var(${C}•position, unset));
    transition: var(--arc-button-transition, var(${C}•transition));
    z-index: var(--arc-button-z-index, var(${C}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${C}•font•weight));
    font-size: var(--arc-button-font-size, var(${C}•font•size, inherit));
    padding: var(--arc-button-padding, var(${C}•padding));
    margin: var(--arc-button-margin, var(${C}•margin, unset));

    width: var(--arc-button-width, var(${C}•width, auto));
    min-width: var(--arc-button-min-width, var(${C}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${C}•max•width, 100%));

    height: var(--arc-button-height, var(${C}•height, auto));
    min-height: var(--arc-button-min-height, var(${C}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${C}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${C}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${C}•color));
    background: var(--arc-button-background, var(${C}•background));
    border: var(--arc-button-border, var(${vr}));
    border-radius: var(--arc-button-border-radius, var(${vr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${lt}));
    outline-offset: var(--arc-button-outline-offset, var(${lt}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);

      opacity: var(--arc-button-content-opacity, var(${C}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${C}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${C}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${C}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Na}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${Lr}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${Lr}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${C}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${Lr}•width: var(--arc-button-svg-width, var(${Gr}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: var(${v}•2m);
      padding: var(${v}•2);
      background: var(${Qr}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${vr}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${C}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,tl=(0,n.jsx)(Tc,{}),C0=(0,n.jsx)("span",{"arc-button-mask":""}),A0=!!h.version.startsWith("18"),S0=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},z0=({popoverTarget:r,popoverTargetAction:a})=>A0?{popovertarget:r??void 0,popovertargetaction:a??void 0}:{popoverTarget:r??void 0,popoverTargetAction:a??void 0},Cr=(0,h.forwardRef)(({children:r,disabled:a,...e},t)=>{const o=(0,h.useRef)(null),{_isCustom:c,iconEnd:i,iconStart:l,icon:d,text:u,isActive:g,isDisabled:f,isProcessing:p,isProcessingWithText:m,hasLargeIcon:b,tag:$,href:w,type:_,title:y,layout:S,shape:k,size:T="lg",variant:B="common",hierarchy:D="primary",scheme:F="auto",shadow:I,onMedia:A,floating:q,isInverse:V=!1,...Q}=e,{isFloating:Y,inset:or}=S0(q),cr=$??(w?"a":"button"),pr=cr==="button"?_||"button":void 0,M=S==="icon",O=m||p||f||a,N=Q?.["aria-disabled"]||O||void 0,L=c?void 0:rl({variant:B}),rr=c?void 0:al({variant:B,hierarchy:D}),J=c?void 0:Js({shape:k}),Z=c?"inherit":T,ur=qh({layout:S,isFloating:Y}),R=Kh({isFloating:Y,isOnMedia:A,shadow:I}),tr=el({variant:B,isInverse:V,scheme:F}),fr=!M&&(r||u),xr=m&&tl||l||d,Or=!M&&(m&&!(l||d)?void 0:i),sa=(p||m&&M)&&tl,ne=L==="ai"?C0:void 0,{tooltip:W,...Br}=Q,hr=Go(W)?W:void 0,da=e.tooltip??hr,Ka=!!da,ce=Go(da)?{text:da}:da,zo=Q["aria-describedby"],Eo=Rr(void 0,"arc-tooltip"),_o=e.id?`${e.id}-tooltip`:Eo,Ga=Ka?_o:void 0,ar=Ka?Dt([zo,Ga]):zo,{anchorName:jr,style:ua,popoverTarget:ma,popoverTargetAction:$e,...Je}=Br,ye=ma?Ft(String(jr||e?.id)):void 0,To=Ka?Ft(String(Ga)):void 0,qa=Ps(ua)?ua:void 0,uu=qa&&"anchorName"in qa&&qa.anchorName,wm=[...(Go(uu)?Ms(uu,", "):[]).map(Ft),...ye?[ye]:[],...To?[To]:[]],hu=Dt(wm,1/0,", "),Cm=qa!=null&&"inset"in qa&&qa.inset!==void 0&&qa.inset!==null&&qa.inset!=="",Am={...qa??{},...hu?{anchorName:hu}:{},...or!==void 0&&!Cm?{"--js\u2022inset":or}:{}},Sm=z0({popoverTarget:ma||void 0,popoverTargetAction:$e||void 0}),zm=(0,h.useCallback)(gu=>{o.current=gu,Ma(t,gu)},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(cr,{...Je,...Sm,ref:zm,"arc-button":c?"custom":"","arc-scheme":tr,"arc-shadow":R||void 0,disabled:!w&&O||void 0,href:w||void 0,title:Ka?void 0:y||void 0,type:pr,"data-layout":ur,"data-shape":J,"data-size":Z,"data-variant":L,"data-hierarchy":rr,"has-large-icon":b?"":void 0,"is-floating":Y?"":void 0,"is-on-media":A?"":void 0,"is-active":g?"":void 0,"is-processing":p||m&&M?"":void 0,"is-processing-with-text":m&&!M?"":void 0,"is-disabled":O||N?"":void 0,"aria-disabled":N,"aria-describedby":ar||void 0,style:Am,children:[(0,n.jsxs)("span",{"arc-button-content":"",children:[!!xr&&(0,n.jsx)("span",{"arc-button-icon":"",children:typeof xr=="string"?(0,n.jsx)(ir,{icon:xr}):xr}),!!fr&&(0,n.jsx)("span",{"arc-button-label":"",children:fr}),!!Or&&(0,n.jsx)("span",{"arc-button-icon":"",children:typeof Or=="string"?(0,n.jsx)(ir,{icon:Or}):Or})]}),sa,ne]}),Ka&&(0,n.jsx)(nn,{...ce,id:Ga,alternateAnchor:ce?.alternateAnchor??(()=>o.current),anchorName:To})]})});Cr.displayName="ArcButton",sr("ArcButton",w0);const qt=(0,h.forwardRef)((r,a)=>(0,n.jsx)(Cr,{...r,ref:a,"arc-popover-button":""})),ol=({isInverse:r=!1,isOpen:a,...e})=>(0,n.jsx)(Cr,{icon:"fa-regular fa-xmark",text:"Dismiss",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),E0=({isInverse:r=!1,...a})=>(0,n.jsx)(Cr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),_0=({children:r,isSticky:a,showDivider:e,showDismiss:t,dismissProps:o,showGoBack:c,goBackProps:i,headerSlotEnd:l,tag:d="header",...u})=>(0,n.jsx)(d,{...u,"arc-popover-header":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,n.jsxs)("div",{"arc-popover-display":"",children:[(0,n.jsxs)("div",{"arc-popover-header-slot":"start",children:[c&&(0,n.jsx)(E0,{...i}),r]}),(0,n.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,n.jsx)(ol,{...o})]})]})}),T0=({children:r,tag:a="article",...e})=>(0,n.jsx)(a,{...e,"arc-popover-body":"",children:(0,n.jsx)("div",{"arc-popover-display":"",children:r})}),I0=({children:r,isSticky:a,showDivider:e,tag:t="footer",...o})=>(0,n.jsx)(t,{...o,"arc-popover-footer":"","has-divider":e?"":void 0,"is-sticky":a?"":void 0,children:(0,n.jsx)("div",{"arc-popover-display":"",children:r})});qt.displayName="ArcPopoverButton";const P=s`--arc-popover`,qr=s`--arc•popover`,er=s`--arc•trail•mix`,Fc=s`${qr}•radius`,j0=s`${qr}•content`,sn=s`${qr}•outline`,ta=s`${qr}•offset`,Za=s`${qr}•header`,R0=s`${qr}•body`,Nc=s`${qr}•divider`,ln=s`${qr}•footer`,Ha=s`${qr}•tail`,mr=s`${Ha}•top`,br=s`${Ha}•left`,Yt=s`${Ha}•size`,xa=s`${Ha}•x`,ka=s`${Ha}•y`,Hc=s`${qr}•font•size`,dn=s`${qr}•padding`,oa=s`${qr}•margin`,dt=s`${Za}•padding`,Sa=s`${R0}•padding`,Xa=s`${ln}•padding`,nl=s`${qr}•fg`,un=s`${qr}•bg`,hn=s`${j0}•bg`,gn=s`${Ha}•fill•a`,vn=s`${Ha}•fill•b`,pn=s`${Ha}•edge•a`,fn=s`${Ha}•edge•b`,L0=s`

  ${qr}•fallback: none;
  ${sn}: var(${P}-outline-size, var(--arc-border-width-md));
  ${Fc}: var(${P}-border-radius, var(--arc-border-radius-lg));
  ${ta}: var(${P}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${dn}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${er}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${xa}: var(${P}-tail-x, 1.75em);
  ${ka}: var(${P}-tail-y, 1.125em);
  ${Yt}: 0px;

  &:where([has-tail]) {
    ${Yt}: var(${P}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${ta}: calc(var(${P}-offset, var(--js•offset, 0px)) + var(${Yt}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${dn}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${Sa}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${Sa}•block•end: 0; }
  }

`,P0=s`

  /* default variant: common */
  &[variant] {
    ${nl}: var(--arc-color-fg-primary);
    ${un}: var(${P}-background, var(--arc-color-bg-mono)) border-box;
    ${hn}: var(${P}-background, var(--arc-color-bg-mono)) padding-box;
    ${gn}: var(${P}-background, var(--arc-color-bg-mono));
    ${vn}: var(${P}-background, var(--arc-color-bg-mono));
    ${pn}: var(${P}-background, var(--arc-color-bg-mono));
    ${fn}: var(${P}-background, var(--arc-color-bg-mono));
    ${qr}•shadow: var(--arc-shadow-lg);
    ${Nc}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${un}: var(--arc-color-border-brand-mid) border-box;
    ${hn}: var(--arc-color-bg-brand-muted) padding-box;
    ${gn}: var(--arc-color-bg-brand-muted);
    ${vn}: var(--arc-color-bg-brand-muted);
    ${pn}: var(--arc-color-border-brand-mid);
    ${fn}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${un}: var(--arc-gradient-ai-200) border-box;
    ${hn}: var(--arc-gradient-ai-50) padding-box;
    ${gn}: var(${P}-ai-purple-50);
    ${vn}: var(${P}-ai-blue-50);
    ${pn}: var(${P}-ai-purple-200);
    ${fn}: var(${P}-ai-blue-200);
  }

`,M0=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Hc}: 0.75em;
    ${Za}•gap: 0.75em;
    ${dt}•block: 0.75em;
    ${dt}•inline: 0.75em;

    ${Sa}•block: 0.75em;
    ${Sa}•inline: 0.75em;

    ${ln}•gap: 0.75em;
    ${Xa}•inline: 0.75em;
    ${Xa}•block•start: 0.75em;
    ${Xa}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Hc}: 0.875em;
    ${Za}•gap: 1.125em;
    ${dt}•block: 1em;
    ${dt}•inline: 1.25em;

    ${Sa}•block: 1.25em;
    ${Sa}•inline: 1.25em;

    ${ln}•gap: 1.125em;
    ${Xa}•inline: 1.25em;
    ${Xa}•block•start: 1em;
    ${Xa}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${dn}: 1.25em;
    }
  }

`,Zt={TOP:s`
    &[anchor-at*='top-'] {
      ${oa}: 0 0 var(${ta}) 0;
      ${mr}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${er}: 95%;
      ${br}: calc(0% + var(${xa}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${er}: 75%;
      ${br}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${er}: 53.5%;
      ${br}: calc(100% - var(${xa}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${oa}: 0 0 0 var(${ta});
      ${br}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${er}: 53.5%;
      ${mr}: calc(0% + var(${ka}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${er}: 75%;
      ${mr}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${er}: 95%;
      ${mr}: calc(100% - var(${ka}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${oa}: var(${ta}) 0 0 0;
      ${mr}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${er}: 5%;
      ${br}: calc(100% - var(${xa}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${er}: 25%;
      ${br}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${er}: 47.5%;
      ${br}: calc(0% + var(${xa}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${oa}: 0 var(${ta}) 0 0;
      ${br}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${er}: 47.5%;
      ${mr}: calc(100% - var(${ka}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${er}: 25%;
      ${mr}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${er}: 5%;
      ${mr}: calc(0% + var(${ka}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${Ha}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${oa}: 0; }
    &[anchor-at*='corner'] { ${oa}: var(${ta}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},ut={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${oa}: 0 0 var(${ta}) 0; }
    &[anchor-at='top-start']::before { ${er}: 47.5%; ${mr}: 0%; }
    &[anchor-at='top-center']::before { ${er}: 25%; ${mr}: 0%; }
    &[anchor-at='top-end']::before { ${er}: 5%; ${mr}: 0%; }

    &[anchor-at='right-start']::before { ${er}: 95%; ${mr}: calc(100% - var(${ka})); }
    &[anchor-at='right-end']::before { ${er}: 53.5%; ${mr}: calc(0% + var(${ka})); }

    &[anchor-at*='bottom-'] { ${oa}: var(${ta}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${er}: 53.5%; ${mr}: 100%; }
    &[anchor-at='bottom-center']::before { ${er}: 75%; ${mr}: 100%; }
    &[anchor-at='bottom-start']::before { ${er}: 95%; ${mr}: 100%; }

    &[anchor-at='left-end']::before { ${er}: 5%; ${mr}: calc(0% + var(${ka})); }
    &[anchor-at='left-start']::before { ${er}: 47.5%; ${mr}: calc(100% - var(${ka})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${er}: 53.5%; ${br}: calc(100% - var(${xa})); }
    &[anchor-at='top-end']::before { ${er}: 95%; ${br}: calc(0% + var(${xa})); }

    &[anchor-at*='right-'] { ${oa}: 0 var(${ta}) 0 0; }
    &[anchor-at='right-start']::before { ${er}: 5%; ${br}: 100%; }
    &[anchor-at='right-center']::before { ${er}: 25%; ${br}: 100%; }
    &[anchor-at='right-end']::before { ${er}: 47.5%; ${br}: 100%; }

    &[anchor-at='bottom-end']::before { ${er}: 47.5%; ${br}: calc(0% + var(${xa})); }
    &[anchor-at='bottom-start']::before { ${er}: 5%; ${br}: calc(100% - var(${xa})); }

    &[anchor-at*='left-'] { ${oa}: 0 0 0 var(${ta}); }
    &[anchor-at='left-end']::before { ${er}: 95%; ${br}: 0%; }
    &[anchor-at='left-center']::before { ${er}: 75%; ${br}: 0%; }
    &[anchor-at='left-start']::before { ${er}: 53.5%; ${br}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${oa}: 0 0 var(${ta}) 0; }
    &[anchor-at='top-start']::before { ${er}: 5%; ${mr}: 0%; ${br}: calc(100% - var(${xa})); }
    &[anchor-at='top-end']::before { ${er}: 47.5%; ${mr}: 0%; ${br}: calc(0% + var(${xa})); }

    &[anchor-at*='right-'] { ${oa}: 0 var(${ta}) 0 0; }
    &[anchor-at='right-start']::before { ${er}: 47.5%; ${mr}: calc(100% - var(${ka})); ${br}: 100%; }
    &[anchor-at='right-end']::before { ${er}: 5%; ${mr}: calc(0% + var(${ka})); ${br}: 100%; }

    &[anchor-at*='bottom-'] { ${oa}: var(${ta}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${er}: 95%; ${mr}: 100%; ${br}: calc(0% + var(${xa})); }
    &[anchor-at='bottom-start']::before { ${er}: 53.5%; ${mr}: 100%; ${br}: calc(100% - var(${xa})); }

    &[anchor-at*='left-'] { ${oa}: 0 0 0 var(${ta}); }
    &[anchor-at='left-end']::before { ${er}: 53.5%; ${mr}: calc(0% + var(${ka})); ${br}: 0%; }
    &[anchor-at='left-start']::before { ${er}: 95%; ${mr}: calc(100% - var(${ka})); ${br}: 0%; }
  `},B0=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${oa});

    container-type: anchored;
    position-anchor: var(${P}-anchor-name, var(--js•anchor));

    ${Zt.TOP}
    ${Zt.RIGHT}
    ${Zt.BOTTOM}
    ${Zt.LEFT}
    ${Zt.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ut.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ut.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ut.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${ut.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${ut.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${ut.FLIP_BLOCK_INLINE}
        }
      }
    }
`,ht={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${P}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${P}-flex, 1);
      position: relative;
      display: var(${P}-content-display, flex);
      flex-direction: var(${P}-content-flex-direction, column);
      gap: var(${P}-content-gap, 0);

      overflow: var(${P}-overflow, auto);
      overscroll-behavior: var(${P}-overscroll-behavior, contain);

      color: var(${P}-color, var(${nl}));
      padding: var(${P}-padding, var(${dn}));
      margin: var(${P}-margin, unset);
      background: var(${P}-content-background, var(${hn}));
      border-radius: calc(var(${Fc}) - var(${sn}));
      border: var(${P}-border, none);

      height: var(${P}-height, auto);
      min-height: var(${P}-min-height, auto);
      max-height: var(${P}-max-height, 65vh);
      resize: var(${P}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${P}-header-flex, none);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, space-between);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-gap, var(${Za}•gap));

      padding: var(${P}-header-padding,
        var(${dt}•block)
        var(${dt}•inline)
      );

      color: var(${P}-header-color, inherit);
      background: var(${P}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-header-z-index, 2);
        top: var(${P}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${P}-header-border-bottom, var(${Nc}));
      }

      :where([arc-button]) {
        margin: var(${P}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Za}•slot•flex: 1;
      ${Za}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Za}•slot•flex: none;
      ${Za}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Za}•slot•flex);
      display: var(${P}-header-display, flex);
      justify-content: var(${P}-header-justify-content, unset);
      align-items: var(${P}-header-align-items, baseline);
      gap: var(${P}-header-slot-gap, var(${Za}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      inset: var(${P}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${P}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${P}-body-flex, 1);
      display: var(${P}-body-display, block);
      flex-direction: var(${P}-body-flex-direction, unset);

      padding: var(${P}-body-padding,
        var(${Sa}•block•start, var(${Sa}•block))
        var(${Sa}•inline)
        var(${Sa}•block•end, var(${Sa}•block))
        var(${Sa}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${P}-footer-flex, none);
      display: var(${P}-footer-display, flex);
      flex-direction: var(${P}-footer-flex-direction, row-reverse);
      justify-content: var(${P}-footer-justify-content, space-between);
      align-items: var(${P}-footer-align-items, center);
      gap: var(${P}-footer-gap, var(${ln}•gap));

      padding: var(${P}-footer-padding,
        var(${Xa}•block•start)
        var(${Xa}•inline)
        var(${Xa}•block•end)
        var(${Xa}•inline)
      );

      background: var(${P}-footer-background, none);
      color: var(${P}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${P}-footer-z-index, 2);
        bottom: var(${P}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${P}-footer-border-top, var(${Nc}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${Ha}•display, block);

      inset: auto;
      top: var(${mr}, auto);
      left: var(${br}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Yt});
      height: var(${Yt});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${gn}) var(${er}),
        var(${vn}) clamp(0%, 100% - var(${er}), 100%)
      );

      border: var(${sn}) solid color-mix(in srgb,
        var(${pn}) var(${er}),
        var(${fn}) clamp(0%, 100% - var(${er}), 100%)
      );
    }
  `},D0=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${P}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${P}-background, var(${un}));
    border: var(${sn}) solid transparent;
    border-radius: var(${Fc});
    box-shadow: var(${P}-shadow, var(${qr}•shadow));
    width: var(${P}-width, auto);
    height: var(${P}-height, auto);
    min-width: var(${P}-min-width, auto);
    min-height: var(${P}-min-height, auto);
    max-width: var(${P}-max-width, 100vw);
    max-height: var(${P}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${P}-font-size, var(${Hc}));
  }

  ${ht.CONTENT}
  ${ht.HEADER}
  ${ht.BODY}
  ${ht.FOOTER}
  ${ht.TAIL}
  ${ht.BACKDROP}
`,Xt={SETUP:L0,ANCHORS:B0,VARIANTS:P0,DENSITIES:M0,ELEMENT:D0},O0=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${d0}

  [arc-popover] {
    ${Xt.SETUP}
    ${Xt.VARIANTS}
    ${Xt.DENSITIES}
  }

  ${Xt.ANCHORS}
  ${Xt.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,cl=(0,h.forwardRef)(({children:r,popover:a=va.popover,anchorAt:e=va.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:c,alternateAnchor:i,boundary:l=va.boundary,tryFallbacks:d=va.tryFallbacks,density:u=va.density,variant:g=va.variant,scheme:f=va.scheme,isInverse:p,hasTail:m,tailSize:b=va.tailSize,offset:$=va.offset,hidePopoverButton:w,headerSlot:_,showHeaderDivider:y,isHeaderSticky:S,showDismiss:k,dismissProps:T,showGoBack:B,goBackProps:D,headerSlotEnd:F,footerSlot:I,isFooterSticky:A,showFooterDivider:q,tag:V="div",contentTag:Q="div",onToggle:Y,...or},cr)=>{const pr=(0,h.useRef)(null),M=(0,h.useRef)(null),O=(0,h.useRef)(null),N=(0,h.useRef)(Y);(0,h.useImperativeHandle)(cr,()=>M.current);const[L,rr]=(0,h.useState)(!1),J=(0,h.useMemo)(()=>f==="auto"?void 0:p?"inverse":f,[p,f]),Z=(0,h.useCallback)(()=>{if(typeof document>"u")return pr.current??null;const hr=Ba(pr.current)??document;return c?hr.getElementById(c):typeof i=="string"?hr.getElementById(i):i instanceof HTMLElement?i:typeof i=="function"?i():i&&typeof i=="object"&&"current"in i?i.current:pr.current??null},[i,c]),ur=d||l==="flip",R=!!m&&!As.includes(e),tr=Ss({canHaveTail:R,tailSize:b}),fr=(0,h.useMemo)(()=>{const hr=t||c||(typeof i=="string"?i:void 0)||o?.id||or.id||void 0;return Ec(String(hr))},[t,o?.id,or.id,i,c]),xr=(0,h.useMemo)(()=>({popoverTarget:or.id,"aria-haspopup":!0,"aria-controls":or.id,"aria-expanded":L}),[or.id,L]),Or=(0,h.useMemo)(()=>({isOpen:L,"aria-label":"Dismiss",...xr,...T}),[T,L,xr]),sa=(0,h.useMemo)(()=>({ref:pr,...xr,...o,tooltip:L?void 0:o?.tooltip,anchorName:fr||""}),[o,xr,fr,L]),ne=(0,h.useMemo)(()=>({"--js\u2022anchor":sa?.anchorName||"","--js\u2022offset":Number($)===0?"":`${$}px`,"--js\u2022tail":tr.cssTailVar}),[sa?.anchorName,$,tr.cssTailVar]);Uo(()=>{const hr=Z();if(O.current=hr,!!hr)return Es(hr,sa.anchorName)},[Z,sa.anchorName,L]),(0,h.useEffect)(()=>{N.current=Y},[Y]),(0,h.useEffect)(()=>{const hr=M.current;if(!hr)return;const la=da=>{const{newState:Ka}=da,ce=Ka==="open";rr(ce),ce&&(O.current=Z()),N.current?.(da)};return hr.addEventListener("toggle",la),()=>hr.removeEventListener("toggle",la)},[Z]),ph({anchorEl:O.current,popoverEl:M.current,anchorAt:e,tryFallbacks:ur,offsetPx:Number($)||0,tailSizePx:tr.floatingTailPx,hasTail:R,isOpen:L}),yh({anchorEl:O.current,popoverEl:M.current,anchorAt:e,tryFallbacks:ur,hasTail:R,isOpen:L});const W=!!(_||B||F),Br=!!I;return(0,n.jsxs)(n.Fragment,{children:[!((c||i)&&w)&&(0,n.jsx)(qt,{...sa}),(0,n.jsxs)(V,{...or,ref:M,"arc-popover":"","arc-scheme":J,"anchor-at":e,"try-fallbacks":ur?"":void 0,popover:a,variant:g,density:u,"has-tail":R?"":void 0,role:or.role??"dialog",style:{...or.style,...ne},children:[(0,n.jsxs)(Q,{"arc-popover-content":"",children:[W&&(0,n.jsx)(_0,{showDivider:y,showGoBack:B,goBackProps:D,headerSlotEnd:F,showDismiss:k,dismissProps:Or,isSticky:S,children:_}),W||Br?(0,n.jsx)(T0,{children:r}):(0,n.jsx)(Q,{"arc-popover-display":"",children:r}),Br&&(0,n.jsx)(I0,{showDivider:q,isSticky:A,children:I})]}),k&&!W&&(0,n.jsx)(ol,{...Or})]})]})});cl.displayName="ArcPopover";const Vc=cl;Vc.handlePopover=zs,Vc.Button=qt;const he=Vc;sr("ArcPopover",O0);const F0=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${v}•4) var(${v}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${v}•6);
      padding: var(${v}•4) var(${v}•8);
    }

    ${dc}
    ${ps}
  }

}
`,N0=r=>(0,n.jsx)("ul",{...r,"data-element":"list"}),H0=r=>(0,n.jsx)("li",{...r,"data-element":"list-item"}),V0=({count:r,anchorId:a,overflowId:e,shouldShowOverflow:t,...o})=>(0,n.jsx)(yc,{title:`+${r}`,children:(0,n.jsx)(he.Button,{...o,id:a,popoverTarget:e,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),U0=({children:r,id:a,size:e="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:c="bottom-end",tryFallbacks:i=!0,...l})=>{const d=Math.min(t,999),u=Rr(a,"arc-avatar-overflow"),g=(0,h.useMemo)(()=>`${u}-anchor`,[u]),f=(0,h.useMemo)(()=>h.Children.toArray(r),[r]);return(0,n.jsxs)(n.Fragment,{children:[d>0&&(0,n.jsx)(V0,{count:d,anchorId:g,overflowId:u,shouldShowOverflow:o}),o&&d>0&&(0,n.jsx)(he,{...l,scheme:"inverse","arc-avatar-overflow":"",id:u,anchorAt:c,tryFallbacks:i,alternateAnchorId:g,hidePopoverButton:!0,variant:"common","data-size":e,children:(0,n.jsx)(N0,{children:f.map((p,m)=>(0,n.jsx)(H0,{children:p},m))})})]})};sr("ArcAvatarOverflow",F0);const il=({fg:r,bg:a})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${a}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${a}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${a}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${a}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${a}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${a}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${a}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${a}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${a}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${a}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${a}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${a}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${a}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${a}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${a}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${a}•low: var(--arc-color-alpha-black-40);
  }
`,sl=({fg:r,bg:a})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${a}: var(${a}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${a}: var(${a}•low);
  }
`,U=s`--arc•badge`,Uc=s`${U}•fg`,Wc=s`${U}•bg`,W0=il({fg:Uc,bg:Wc}),K0=sl({fg:Uc,bg:Wc}),G0=s`
  &:has(>[data-size=lg]) {
    ${U}•font•size: var(${v}•14);
    ${U}•font•size•caps: var(${v}•12);
    ${U}•size: var(${v}•24);
    ${U}•min•size: var(${v}•30);
    ${U}•padding•inline: var(${v}•8);
    ${U}•border•radius: var(${v}•4);
    ${U}•gap: var(${v}•4);
  }

  &:has(>[data-size=md]) {
    ${U}•font•size: var(${v}•12);
    ${U}•font•size•caps: var(${v}•10);
    ${U}•size: var(${v}•20);
    ${U}•min•size: var(${v}•24);
    ${U}•padding•inline: var(${v}•6);
    ${U}•border•radius: var(${v}•4);
    ${U}•gap: var(${v}•4);
  }

  &:has(>[data-size=sm]) {
    ${U}•font•size: var(${v}•10);
    ${U}•font•size•caps: var(${v}•8);
    ${U}•size: var(${v}•16);
    ${U}•min•size: var(${v}•18);
    ${U}•padding•inline: var(${v}•4);
    ${U}•border•radius: var(${v}•4);
    ${U}•gap: var(${v}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${U}•font•size: 1em;
    ${U}•font•size•text: 0.75em;
    ${U}•font•size•caps: 0.625em;
    ${U}•size: 1.25em;
    ${U}•min•size: 1.5em;
    ${U}•padding•inline: 0.375em;
    ${U}•border•radius: 0.25em;
    ${U}•gap: 0.25em;
  }
`,q0=s`
  &:has(>[data-layout=fill]) {
    ${U}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${U}•display: flex;
    ${U}•min•width: var(${U}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${U}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${U}•display: inline-flex;
    ${U}•min•width: min-content;
  }
`,Y0=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${W0}
    ${K0}
    ${G0}
    ${q0}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${U}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${U}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${U}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${U}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${U}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${U}•flex);
    display: var(${U}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${U}•size);
    padding-inline: var(${U}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${Uc}));
    background: var(--arc-badge-background, var(${Wc}));
    border-radius: var(${U}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${U}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${U}•font•size•caps);
    }
  }

}
`,ll=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Z0=["brand",...ll.filter(r=>r!=="brand")],X0=["neutral",...ll.filter(r=>r!=="neutral")],J0=Zr(Ie,Z0),Q0=Zr(Ie,X0),rg=Zr(ea,["inherit","lg","md","sm"]),ag=Zr(La,["hug","fill"]),eg=["high","low"],tg=Zr(Er,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),og={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},ng=({children:r,icon:a,text:e,isFlipped:t,isFlexible:o,isUppercase:c,color:i,variant:l,size:d="inherit",layout:u="hug",contrast:g="high",...f})=>{const p=i??og[l??"brand-blue"],m=r||(0,n.jsx)(Jr,{icon:a,text:e,isFlipped:t,layout:"gutter"}),b=u==="fill"&&o;return(0,n.jsx)("span",{...f,"arc-badge-wrapper":"",children:(0,n.jsx)("span",{"arc-badge":"","data-contrast":g,"data-color":p,"data-layout":u,"data-size":d,"data-is-flexible":b?"":void 0,"data-is-uppercase":c?"":void 0,children:m})})};sr("ArcBadge",Y0);const Ar=s`--arc•badge•count`,Kc=s`${Ar}•fg`,Gc=s`${Ar}•bg`,cg=il({fg:Kc,bg:Gc}),ig=sl({fg:Kc,bg:Gc}),sg=s`
  &:has(>[data-size=lg]) {
    ${Ar}•font•size: var(${v}•14);
    ${Ar}•size: var(${v}•24);
    ${Ar}•padding•inline: var(${v}•4);
  }

  &:has(>[data-size=md]) {
    ${Ar}•font•size: var(${v}•12);
    ${Ar}•size: var(${v}•20);
    ${Ar}•padding•inline: var(${v}•4);
  }

  &:has(>[data-size=sm]) {
    ${Ar}•font•size: var(${v}•10);
    ${Ar}•size: var(${v}•16);
    ${Ar}•padding•inline: var(${v}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${Ar}•font•size: 1em;
    ${Ar}•font•size•text: 0.75em;
    ${Ar}•size: 1.25em;
    ${Ar}•padding•inline: 0.25em;
  }
`,lg=s`
  &:has(>[data-shape=square]) {
    ${Ar}•border•radius: var(${v}•4);
  }

  &:has(>[data-shape=circle]) {
    ${Ar}•border•radius: var(--arc-border-radius-pill);
  }
`,dg=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${cg}
  ${ig}
  ${sg}
  ${lg}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${Ar}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${Ar}•size);
  min-width: var(${Ar}•size);
  padding-inline: var(${Ar}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Kc}));
  background: var(--arc-badge-count-background, var(${Gc}));
  border-radius: var(${Ar}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${Ar}•font•size•text, 1em);
  }
}

`,ug=Zr(ea,["inherit","lg","md","sm"]),hg=Zr(Er,["neutral","brand","critical","warning","success","inverse"]),gg=["low","high"],vg=Zr(St,["square","circle"]),pg={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},fg=({children:r,text:a,color:e,variant:t,contrast:o,size:c="inherit",shape:i="square",...l})=>{const d=r||(0,n.jsx)("span",{"data-element":"text",children:a}),u=e??pg[t??"neutral"],g=t==="critical"?"high":o??"low";return(0,n.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,n.jsx)("span",{"arc-badge-count":"","data-color":u,"data-contrast":g,"data-shape":i,"data-size":c,children:d})})};sr("ArcBadgeCount",dg);const za=s`--arc•banner`,na=s`${za}•bg`,ra=s`${za}•fg`,wa=s`${za}•columns`,ge=s`${za}•border`,qc=s`${za}•border•radius`,Jt=s`${za}•padding`,Ve=s`${za}•min•height`,mn=s`${za}•body`,gt=s`${mn}•font•size`,bn=s`${mn}•gap`,dl=s`${mn}•flex•direction`,ul=s`${mn}•min•width`,Yc=s`${za}•icon`,vt=s`${Yc}•font•size`,Zc=s`${Yc}•padding`,ke=s`${Yc}•color`,hl=s`${za}•action`,Xc=s`${hl}•justify`,Jc=s`${hl}•gap`,Qt=s`${za}•column•gap`,Qc=s`${za}•row•gap`,mg=s`
  &:where([variant=ai]) {
    ${ra}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${na}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${ge}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${ra}: var(--arc-color-fg-primary);
    ${ke}: var(--arc-color-fg-brand-mid);
    ${na}: var(--arc-color-bg-blue-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${ra}: var(--arc-color-fg-primary);
    ${ke}: var(--arc-color-fg-critical-mid);
    ${na}: var(--arc-color-bg-critical-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${ra}: var(--arc-color-fg-primary);
    ${ke}: var(--arc-color-fg-info-mid);
    ${na}: var(--arc-color-bg-info-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${ra}: var(--arc-color-fg-secondary);
    ${ke}: var(--arc-color-fg-secondary);
    ${na}: var(--arc-color-alpha-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${ra}: var(--arc-color-fg-primary);
    ${ke}: var(--arc-color-fg-success-mid);
    ${na}: var(--arc-color-bg-success-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${ra}: var(--arc-color-fg-primary);
    ${ke}: var(--arc-color-fg-warning-mid);
    ${na}: var(--arc-color-bg-warning-muted);
    ${ge}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,bg=s`
  &:where([variant=ai]) {
    ${ra}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${na}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${ra}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${ra}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${ra}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${ra}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${ra}: var(--arc-color-fg-on-stark);
    ${na}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${ra}: var(--arc-color-fg-on-mid);
    ${na}: var(--arc-color-bg-warning-mid);
  }
`,$g=s`
  ${bn}: 0.375em;
  ${dl}: column;
  ${ul}: 7em;
  ${Jc}: 0.75em;
  ${Qt}: 0.75em;
  ${Qc}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${mg}

    ${Jt}: 0 0.75em 0 1em;
    ${qc}: var(--arc-border-radius-lg);
    ${bn}: 0.125em;
    ${Zc}: 0.0625em;
    ${Qt}: 0.625em;

    ${Ve}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${Ve}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${Ve}: 3.5em;
        ${Qc}: 0.25em;

        &:has([arc-banner-actions]) {
          ${Ve}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Xc}: flex-start;

      &[density=compact] {
        ${Jt}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${gt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${bg}

    ${Ve}: 4em;
    ${Jt}: 0 0.75em 0 1em;
    ${ge}: none;
    ${qc}: 0;
    ${bn}: 0.125em;
    ${Qt}: 1em;
    ${Xc}: flex-end;
    ${Zc}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${vt}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${gt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${vt}: 1em;
    ${gt}: 0.875em;
  }

  &[density=compact] {
    ${Ve}: 2em;
    ${Jt}: 0 0.25em 0 0.5em;
    ${gt}: 0.75em;
    ${Jc}: 0.5em;
    ${Qt}: 0.5em;

    &[action-placement=inline] {
      ${vt}: 1em;
    }

    &[action-placement=bottom] {
      ${vt}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${ke}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${ke}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${vt});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,yg=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,xg=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${gt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,kg=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${wa}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${wa}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${wa}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${wa}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${wa}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${wa}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${wa}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${wa}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${wa}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${wa}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${wa}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${wa}: 1fr;
    }
  }
`,wg=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${ge}));
  background: var(--arc-banner-background, var(${na}));
  border-radius: var(--arc-banner-border-radius, var(${qc}));
  padding: var(--arc-banner-padding, var(${Jt}));
  min-height: var(--arc-banner-min-height, var(${Ve}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${kg}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${ra}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${wa});
    column-gap: var(${Qt});
    row-gap: var(${Qc});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${ra}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${ul}));

    display: flex;
    flex-direction: var(${dl});
    gap: var(${bn});
  }

  [arc-banner-icon] {
    font-size: var(${vt});
    padding-inline: var(${Zc});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${gt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Xc}));
    gap: var(--arc-banner-action-gap, var(${Jc}));
  }

`,Cg=s`
@layer arc-components {
  ${h0}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${$g}

    /* CORE STYLES --------------------------------------------------• */
    ${wg}

    /* INSET LAYOUT -------------------------------------------------• */
    ${yg}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${xg}
  }

}
`,Ag=["comfortable","compact"],Sg=["inset","bleed"],zg=["inline","bottom"],Eg=["left","center"],_g=[...ie],Tg=[...Er,"announcement"],Ig=Zr(Tg,["ai","announcement","critical","info","neutral","success","warning"]),we={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},jg=r=>r==="critical"||r==="warning"?"alert":"status",Rg=({children:r,id:a,icon:e,dismissProps:t,heading:o,density:c=we.density,layout:i=we.layout,actionPlacement:l=we.actionPlacement,alignment:d=we.alignment,actionSlot:u,showDismiss:g=we.showDismiss,message:f,variant:p=we.variant,onClose:m,...b})=>{const $=Rr(a,"arc-banner"),w=$c(e),_=d==="center",y=i==="bleed",S=i==="inset",k=c==="compact",T=l==="inline",B=!!w,F=S&&p==="ai"?"ai-200":void 0,I={variant:p,layout:i,density:c,alignment:d,"action-placement":l},A=()=>(0,n.jsx)(ir,{icon:w,gradient:F}),q=()=>(0,n.jsx)(n.Fragment,{children:!!u&&(0,n.jsx)("span",{"arc-banner-actions":"",children:u})}),V=()=>(0,n.jsx)("div",{"arc-banner-dismiss":"",children:(0,n.jsx)(Cr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:S||y&&p==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:k?"sm":"md",...t,onClick:or=>{t?.onClick?.(or),m?.()}})}),Q=({showActions:or=!0})=>(0,n.jsx)("div",{"arc-banner-body":"",children:r||(0,n.jsxs)(Jr,{icon:(0,n.jsx)(A,{}),children:[!!o&&(0,n.jsx)("strong",{children:o})," ",f," ",or&&u]})}),Y=()=>(0,n.jsxs)(n.Fragment,{children:[B&&(0,n.jsx)("span",{"arc-banner-icon":"",children:(0,n.jsx)(A,{})}),(0,n.jsx)("div",{"arc-banner-body":"",children:r||(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("strong",{"arc-banner-heading":"",children:o}),f&&(0,n.jsx)("span",{"arc-banner-message":"",children:f})]})})]});return(0,n.jsx)("div",{role:jg(p??we.variant),...b,...I,"arc-banner":"",id:$,children:(0,n.jsxs)("div",{"arc-banner-grid":"",children:[_?(0,n.jsx)(Q,{}):(0,n.jsxs)(n.Fragment,{children:[k&&T?(0,n.jsx)(Q,{showActions:!1}):(0,n.jsx)(Y,{}),(0,n.jsx)(q,{})]}),g&&(0,n.jsx)(V,{})]})})};sr("ArcBanner",Cg);const ve=s`--arc•label`,ro=s`${ve}•cursor`,ao=s`${ve}•opacity`,Lg=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${ao}: var(--arc-label-opacity, unset);
    ${ao}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${ve}•display: var(--arc-label-display, inline-flex);
    ${ve}•gap: var(--arc-label-gap, var(${v}•8));
    ${ve}•align•items: var(--arc-label-align-items, baseline);

    ${ro}: var(--arc-label-cursor, pointer);
    ${ro}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${ro}: var(${ro}•disabled);
      ${ao}: var(${ao}•disabled);
    }

    &[data-layout=fill] {
      ${ve}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${ve}•display);
    align-items: var(${ve}•align•items);
    gap: var(${ve}•gap);
    cursor: var(${ro});
  }

}
`,Pg=X(La,["hug","fill"]),Ce=({layout:r,...a})=>(0,n.jsx)("label",{...a,"arc-label":"","data-layout":r});sr("ArcLabel",Lg);const Mg=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${ao}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Ue=r=>(0,n.jsx)("span",{...r,"arc-label-content":""});sr("LabelContent",Mg);const Bg={checkbox:"checkbox",radio:"radio",switch:"radio"},eo=({id:r,indeterminate:a,type:e,onChange:t,...o})=>{const c=e==="checkbox"&&!!a,i=(0,h.useRef)(null),l=Rr(r,`arc-${e}`),d=u=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const f={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:o?.value};u?.(f,g)};return(0,h.useEffect)(()=>{i.current?.type==="checkbox"&&(i.current.indeterminate=!!a)},[a]),(0,n.jsx)("input",{...o,id:l,ref:i,type:Bg[e],"arc-input-type":e,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:d(t)})},Dg=s`
@layer arc-components {

  [arc-input-mask] {
    ${j}•border•width: var(--arc-border-width-sm);
    ${j}•border: var(${j}•border•width) solid var(${j}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${j}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${j}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${j}•outline: var(${j}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${j}•width);
    height: var(${j}•height);
    opacity: var(${j}•opacity, var(--arc-alpha-100));

    color: var(${j}•color, transparent);
    background: var(${j}•background);
    border: var(${j}•border);
    border-radius: var(${j}•border•radius);
    translate: var(${j}•translate, unset);

    outline: var(${j}•outline, none);
    outline-offset: var(${j}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${j}•border•width) * -1);
      cursor: var(${j}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${j}•z•index, unset);
    }
  }

}
`,$n=({type:r,...a})=>(0,n.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,n.jsx)("span",{...a,"arc-input-mask":r})});sr("ArcBooleanInputMask",Dg);const Hr=s`--arc•checkbox`,Og=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Hr}•font•size: 1em;
      ${Hr}•icon•size: 0.625em;
      ${Hr}•size: 1.125em;
      ${Hr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Hr}•font•size: var(${v}•14);
      ${Hr}•icon•size: var(${v}•10);
      ${Hr}•size: var(${v}•18);
      ${Hr}•gap: var(${v}•8);
    }

    &[data-size=sm] {
      ${Hr}•font•size: var(${v}•12);
      ${Hr}•icon•size: var(${v}•10);
      ${Hr}•size: var(${v}•16);
      ${Hr}•gap: var(${v}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${j}•border•radius: var(${v}•4);
    ${j}•size: var(${Hr}•size);
    ${j}•icon•size: var(${Hr}•icon•size);
    ${j}•width: var(${Hr}•size);
    ${j}•height: var(${Hr}•size);
    ${j}•translate: 0 var(${v}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${Hr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${Hr}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${j}•color: transparent;
      ${j}•border•color: var(--arc-color-border-stark);
      ${j}•background: transparent;

      &:hover {
        ${j}•border•color: var(--arc-color-border-theme-heavy);
        ${j}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${j}•border•color: var(--arc-color-border-disabled);
        ${j}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${j}•color: var(--arc-color-fg-on-theme-heavy);
        ${j}•border•color: transparent;
        ${j}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${j}•color: var(--arc-color-fg-on-theme-stark);
          ${j}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${j}•color: var(--arc-color-fg-on-theme-mid);
          ${j}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${j}•color: var(--arc-color-fg-theme-heavy);
        ${j}•border•color: var(--arc-color-border-theme-heavy);
        ${j}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${j}•color: var(--arc-color-fg-theme-stark);
          ${j}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${j}•color: var(--arc-color-fg-theme-subtle);
          ${j}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,Fg=X(La,["hug","fill"]),Ng=X(ea,["inherit","md","sm"]),Hg=X(Er,["primary","secondary"]),gl=({children:r,label:a,layout:e,size:t="md",variant:o="primary",useMask:c=!0,...i})=>{const{className:l,title:d,...u}=i,g={className:l,title:d},f=r??a,p=(0,n.jsx)(eo,{...u,type:"checkbox"}),m=c&&(0,n.jsxs)($n,{type:"checkbox",children:[p,(0,n.jsx)(ir,{icon:u?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!f&&(0,n.jsxs)(Ce,{layout:e,children:[m||p,(0,n.jsx)(Ue,{children:f})]});return(0,n.jsx)("span",{...g,"arc-checkbox":"","data-size":t,"data-variant":o,children:b||m||p})};sr("ArcCheckbox",Og);const Ea=s`--arc•cb`,Sr=s`${Ea}•o`,_a=s`${Sr}•border`,ri=s`${Sr}•icon`,ai=s`${Sr}•text`,Vg=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Ea}•font•size: var(${v}•14);
    ${Ea}•border•radius: var(${v}•6);
    ${Ea}•background: var(--arc-color-alpha-black-0);
    ${Ea}•padding: 0px;
    ${Ea}•gap: var(${v}•2);

    ${Sr}•color: var(--arc-color-fg-secondary);
    ${Sr}•background: var(--arc-color-alpha-white-0);

    ${_a}•color: var(--arc-color-alpha-black-0);
    ${_a}•width: var(${v}•1);
    ${_a}•radius: var(${v}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${Sr}•size: var(${v}•40);
      ${Sr}•line•height: var(${v}•38); /* • -2px to account for border-width (top/bottom) */
      ${ri}•padding: var(${v}•8);
      ${ai}•padding: var(${v}•12);
    }

    &[data-size=md] {
      ${Sr}•size: var(${v}•32);
      ${Sr}•line•height: var(${v}•30); /* • -2px to account for border-width (top/bottom) */
      ${ri}•padding: var(${v}•6);
      ${ai}•padding: var(${v}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Ea}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Ea}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${Sr}•color: var(--arc-color-fg-on-hover-default);
        ${Sr}•background: var(--arc-color-bg-hover-default);
        ${_a}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${Sr}•color: var(--arc-color-fg-primary);
      ${Sr}•background: var(--arc-color-bg-secondary);
      ${_a}•color: var(--arc-color-alpha-black-0);
      ${Sr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${Sr}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Sr}•outline: var(${_a}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Ea}•font•size));
    display: var(${Ea}•display);
    gap: var(${Ea}•gap);
    background: var(${Ea}•background);
    border-radius: var(${_a}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${_a}•radius);
      outline: var(${Sr}•outline, none);
      outline-offset: var(${_a}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${Sr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Sr}•size);
      min-width: var(${Sr}•size);

      border-radius: var(${_a}•radius);
      border: var(${_a}•width) solid var(${_a}•color);
      background: var(${Sr}•background);
      color: var(${Sr}•color);
      font-weight: var(${Sr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${ai}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${ri}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Ug=X(La,["hug","fill"]),Wg=X(ea,["lg","md"]),Kg=({children:r,label:a,icon:e,...t})=>{const o=r||(0,n.jsx)(Jr,{icon:e,text:a});return(0,n.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,n.jsx)(gl,{...t,label:o,layout:"fill",useMask:!1})})},Gg=({children:r,size:a="lg",layout:e="hug",...t})=>(0,n.jsx)("ul",{...t,"arc-checkbox-bar":"","data-size":a,"data-layout":e,role:"group",children:r});sr("ArcCheckboxBar",Vg);const qg=["normal","simple","add"],Yg=["swatch","color-stop","thumbnail"],Zg=["standalone","embedded"],vl=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],pl=["eye-dropper","alpha-slider","hex-input","palettes"],Xg=1e-10,ei=1e-6,yn=1e-4,K=(r,a,e)=>Math.min(e,Math.max(a,r)),xn=(r,a)=>{const e=10**a;return Math.round(r*e)/e},fl=(r,a=ei)=>Math.abs(r)<a?0:Math.abs(1-r)<a?1:r,to=r=>parseInt(r,16),Yr=r=>K(xn(r,0),0,255),ml=r=>xn((r%360+360)%360,2),bl=(r,a)=>fl(xn(K(r,0,1),a)),Va=r=>{const a=(r.h%360+360)%360,e=K(r.s,0,1),t=K(r.v,0,1),o=K(r.a,0,1),c=t*e,i=c*(1-Math.abs(a/60%2-1)),l=t-c;let d=0,u=0,g=0;return a<60?[d,u,g]=[c,i,0]:a<120?[d,u,g]=[i,c,0]:a<180?[d,u,g]=[0,c,i]:a<240?[d,u,g]=[0,i,c]:a<300?[d,u,g]=[i,0,c]:[d,u,g]=[c,0,i],{r:(d+l)*255,g:(u+l)*255,b:(g+l)*255,a:o}},oo=(r,a)=>{const e=K(r.r,0,255)/255,t=K(r.g,0,255)/255,o=K(r.b,0,255)/255,c=Math.max(e,t,o),i=Math.min(e,t,o),l=c-i,d=c===0?0:l/c,u=c;let g=a??0;return l>Xg?(c===e?g=60*((t-o)/l%6):c===t?g=60*((o-e)/l+2):g=60*((e-t)/l+4),g<0&&(g+=360)):g=(g%360+360)%360,{h:g,s:d,v:u,a:K(r.a,0,1)}},$l=r=>{const a=(r.h%360+360)%360,{s:e}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*e,c=o*(1-Math.abs(a/60%2-1)),i=t-o/2;let l=0,d=0,u=0;return a<60?[l,d,u]=[o,c,0]:a<120?[l,d,u]=[c,o,0]:a<180?[l,d,u]=[0,o,c]:a<240?[l,d,u]=[0,c,o]:a<300?[l,d,u]=[c,0,o]:[l,d,u]=[o,0,c],{r:(l+i)*255,g:(d+i)*255,b:(u+i)*255,a:r.a}},yl=r=>{const a=r.r/255,e=r.g/255,t=r.b/255,o=Math.max(a,e,t),c=Math.min(a,e,t),i=o-c;let l=0;i!==0&&(o===a?l=60*((e-t)/i%6):o===e?l=60*((t-a)/i+2):l=60*((a-e)/i+4)),l<0&&(l+=360);const d=(o+c)/2,u=i===0?0:i/(1-Math.abs(2*d-1));return{h:l,s:u,l:d,a:r.a}},xl=r=>{const a=We(r.r),e=We(r.g),t=We(r.b),o=.4122214708*a+.5363325363*e+.0514459929*t,c=.2119034982*a+.6806995451*e+.1073969566*t,i=.0883024619*a+.2817188376*e+.6299787005*t,l=Math.cbrt(o),d=Math.cbrt(c),u=Math.cbrt(i),g=.2104542553*l+.793617785*d-.0040720468*u,f=1.9779984951*l-2.428592205*d+.4505937099*u,p=.0259040371*l+.7827717662*d-.808675766*u,m=Math.sqrt(f*f+p*p);let b=Math.atan2(p,f)*180/Math.PI;return b<0&&(b+=360),{L:K(g,0,1),C:m,h:b,a:K(r.a,0,1)}},kl=r=>{const a=K(r.L,0,1),e=r.h*Math.PI/180,t=r.C*Math.cos(e),o=r.C*Math.sin(e),c=a+.3963377774*t+.2158037573*o,i=a-.1055613458*t-.0638541728*o,l=a-.0894841775*t-1.291485548*o,d=c*c*c,u=i*i*i,g=l*l*l,f=4.0767416621*d-3.3077115913*u+.2309699292*g,p=-1.2684380046*d+2.6097574011*u-.3413193965*g,m=-.0041960863*d-.7034186147*u+1.707614701*g,b=$=>{const w=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(K(w,0,1)*255)};return{r:b(f),g:b(p),b:b(m),a:K(r.a,0,1)}},We=r=>{const a=Yr(r)/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4},wl=r=>{const a=We(r.r),e=We(r.g),t=We(r.b);return .2126*a+.7152*e+.0722*t},Cl=(r,a)=>{const e=r.a+a.a*(1-r.a);if(e<=0)return{r:0,g:0,b:0,a:0};const t=r.a/e,o=a.a*(1-r.a)/e;return{r:Yr(r.r*t+a.r*o),g:Yr(r.g*t+a.g*o),b:Yr(r.b*t+a.b*o),a:bl(e,2)}},no=(r,a,e,t)=>{const o=t?t(r):r,c=t?t(a):a;return Math.abs(o-c)<=e},pt=(r,a,e)=>no(r,a,e,Math.round),ti=(r,a,e)=>no(r,a,e),kn=(r,a)=>!a||!r?!1:pt(r.r,a.r,1)&&pt(r.g,a.g,1)&&pt(r.b,a.b,1)&&ti(r.a,a.a,1/255+ei),oi=(r,a)=>!r||!a?!1:Yr(r.r)===Yr(a.r)&&Yr(r.g)===Yr(a.g)&&Yr(r.b)===Yr(a.b)&&Math.abs(r.a-a.a)<ei,ni=(r,a)=>!a||!r?!1:pt(r.r,a.r,3)&&pt(r.g,a.g,3)&&pt(r.b,a.b,3)&&ti(r.a,a.a,.02),ci=(r,a)=>no(r.h,a.h,yn)&&no(r.s,a.s,yn)&&no(r.v,a.v,yn)&&ti(r.a,a.a,yn),Jg=/^[0-9a-f]+$/i,Qg=500,ft=new Map,ii=r=>({...r}),rv=(r,a)=>{if(ft.size>=Qg){const e=ft.keys().next().value;e&&ft.delete(e)}ft.set(r,a?ii(a):null)},av=r=>r.split("").map(a=>a+a).join(""),Al=r=>{const a=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(a.length))return null;const e=a.length<=4?av(a):a;if(!Jg.test(e))return null;const t=to(e.slice(0,2)),o=to(e.slice(2,4)),c=to(e.slice(4,6)),i=e.length===8?to(e.slice(6,8))/255:1;return[t,o,c,i].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:c,a:K(i,0,1)}},Ja=r=>{const a=Number(r.trim());return Number.isFinite(a)?a:null},si=r=>{const a=r.trim();if(a.endsWith("%")){const t=Ja(a.slice(0,-1));return t==null?null:K(t/100*255,0,255)}const e=Ja(a);return e==null?null:K(e,0,255)},co=r=>{const a=r.trim();if(a.endsWith("%")){const t=Ja(a.slice(0,-1));return t==null?null:K(t/100,0,1)}const e=Ja(a);return e==null?null:K(e,0,1)},li=(r,a)=>{const t=r.trim().toLowerCase().match(a);if(!t)return null;const o=t[1].trim(),[c,i]=o.split("/").map(u=>u.trim()),l=c.includes(",")?c.split(",").map(u=>u.trim()):c.split(/\s+/).filter(Boolean),d=i&&i.length?i:null;return{body:o,channels:l,alphaPart:d}},ev=r=>{const a=li(r,/^rgba?\((.*)\)$/);if(!a)return null;const{body:e,channels:t,alphaPart:o}=a;if(t.length!==3)return null;const c=si(t[0]),i=si(t[1]),l=si(t[2]);if(c==null||i==null||l==null)return null;let d=1;if(o){const u=co(o);if(u==null)return null;d=u}else{const u=e.includes(",")?e.split(",").map(g=>g.trim()):null;if(u&&u.length===4){const g=co(u[3]);if(g==null)return null;d=g}}return{r:c,g:i,b:l,a:d}},tv=r=>{const a=li(r,/^hsla?\((.*)\)$/);if(!a)return null;const{body:e,channels:t,alphaPart:o}=a;if(t.length!==3)return null;const c=f=>Number(f.replace("deg","").trim()),i=f=>{if(!f.endsWith("%"))return null;const p=Ja(f.slice(0,-1));return p==null?null:p/100},l=c(t[0]),d=i(t[1]),u=i(t[2]);if(!Number.isFinite(l)||d==null||u==null)return null;let g=1;if(o){const f=co(o);if(f==null)return null;g=f}else{const f=e.includes(",")?e.split(",").map(p=>p.trim()):null;if(f&&f.length===4){const p=co(f[3]);if(p==null)return null;g=p}}return $l({h:l,s:d,l:u,a:g})},ov=r=>{const a=li(r,/^oklch\((.*)\)$/);if(!a)return null;const{channels:e,alphaPart:t}=a;if(e.length!==3)return null;const o=g=>{const f=g.trim();if(f.endsWith("%")){const m=Ja(f.slice(0,-1));return m!=null?K(m/100,0,1):null}const p=Ja(f);return p!=null?K(p,0,1):null},c=g=>{const f=g.trim();if(f.endsWith("%")){const m=Ja(f.slice(0,-1));return m!=null&&m>=0?m/100*.4:null}const p=Ja(f);return p!=null&&p>=0?p:null},i=o(e[0]),l=c(e[1]),d=Ja(e[2].trim());if(i==null||l==null||d==null||!Number.isFinite(d))return null;let u=1;if(t){const g=co(t);if(g==null)return null;u=g}return kl({L:i,C:l,h:d,a:u})},Tr=r=>{if(!r||typeof r!="string")return null;const a=r.toLowerCase().trim();if(ft.has(a)){const t=ft.get(a);return t?ii(t):null}let e=null;return a.startsWith("#")?e=Al(a):a.startsWith("rgb")?e=ev(a):a.startsWith("hsl")?e=tv(a):a.startsWith("oklch")&&(e=ov(a)),rv(a,e),e?ii(e):null},Sl=r=>{if(!r||typeof r!="string")return!1;const a=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(a)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(a)},zl=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.r=="number"&&typeof a.g=="number"&&typeof a.b=="number"&&typeof a.a=="number"},El=r=>{if(!r||typeof r!="object")return!1;const a=r;return typeof a.h=="number"&&typeof a.s=="number"&&typeof a.v=="number"&&typeof a.a=="number"},mt=r=>String(Math.round(K(r,0,1)*100)),_l=r=>{const a=r.trim();if(!a)return null;if(a.endsWith("%")){const t=Number(a.slice(0,-1).trim());return Number.isFinite(t)?K(t/100,0,1):null}if(a.startsWith(".")||a.includes(".")){const t=Number(a);return Number.isFinite(t)?K(t,0,1):null}const e=Number(a);return Number.isFinite(e)?K(e/100,0,1):null},wn=r=>K(Number(r.toFixed(2)),0,1).toString(),Ta=(r,a=!1)=>{const e=l=>K(Math.round(l),0,255).toString(16).padStart(2,"0"),t=e(r.r),o=e(r.g),c=e(r.b),i=e(K(r.a,0,1)*255);return a?`#${t}${o}${c}${i}`:`#${t}${o}${c}`},di=r=>{const a=yl(r),e=Math.round(a.h),t=Math.round(a.s*100),o=Math.round(a.l*100);return`hsl(${e} ${t}% ${o}% / ${wn(K(a.a,0,1))})`},Ke=r=>{const a=K(Math.round(r.r),0,255),e=K(Math.round(r.g),0,255),t=K(Math.round(r.b),0,255),o=K(r.a,0,1);return o<1?`rgb(${a} ${e} ${t} / ${wn(o)})`:`rgb(${a} ${e} ${t})`},ui=r=>{const a=xl(r),e=Math.round(a.L*1e3)/10,t=Math.round(a.C/.4*1e3)/10,o=Math.round(a.h),c=K(a.a,0,1);return c<1?`oklch(${e}% ${t}% ${o} / ${wn(c)})`:`oklch(${e}% ${t}% ${o})`},Tl={auto:r=>r.a<1?Ke(r):Ta({...r,a:1},!1),hex:r=>Ta({...r,a:1},!1),hexa:r=>Ta(r,!0),rgb:r=>Ke(r),hsl:r=>di(r),oklch:r=>ui(r)},nv=(r,a)=>(Tl[r]??Tl.hex)(a),Ca=r=>typeof r=="string"?r:r.color,Cn=(r,a)=>typeof r!="string"&&r.name?r.name:a??void 0,Il=r=>{const a=Ca(r),e=Tr(a),t=!!e&&e.a<1&&e.a>.01,o=!!e&&e.a===0;return{cssColor:a,rgba:e,isTranslucent:t,isTransparent:o,opaqueHex:e?Ta({...e,a:1},!1):null}},An=(r,a)=>{if(El(r))return r;const e=(zl(r)?r:null)??Tr(r)??Tr(a)??{r:0,g:0,b:0,a:1};return oo(e)},Ge=(r,a)=>{const e=a?.fallbackHex??"#000000",t=a?.format??"hex",o=An(r,e),c={h:(o.h%360+360)%360,s:K(o.s,0,1),v:K(o.v,0,1),a:K(o.a,0,1)},i=Va(c),l={r:Yr(i.r),g:Yr(i.g),b:Yr(i.b),a:c.a},d=nv(t,l);let u,g,f,p,m;const b=l.a<1?"rgb":"hex",$=l.a<1?Ke(l):Ta({...l,a:1},!1);return{format:t,value:d,alpha:l.a,autoFormat:b,autoValue:$,hsv:c,rgba:l,get hex(){return u??=Ta({...l,a:1},!1)},get hexa(){return g??=Ta(l,!0)},get rgb(){return f??=Ke(l)},get hsl(){return p??=di(l)},get oklch(){return m??=ui(l)}}},jl=(r,a)=>({...Ge(r.hsv,{format:a}),name:r.name}),Rl=(r,a)=>({color:Ca(r),name:Cn(r,a)}),Ll=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),bt=r=>Ca(r).trim().toLowerCase(),Sn=(r,a)=>{if(bt(r)===bt(a))return!0;const e=Tr(Ca(r)),t=Tr(Ca(a));return!!e&&!!t&&kn(e,t)},hi=(r,a,e)=>{const t=e?.skipIndex;return r.some((o,c)=>c!==t?Sn(o,a):!1)},cv=r=>{let a=null;try{a=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(a==null)return null;const e=window.getComputedStyle(a);return Tr(e?.backgroundColor)},gi=(r,a)=>{const e=Tr(Ca(r));if(!e)return a?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:c,bgColor:i,bgElement:l}=a??{},d=a?.useScheme?"light":t??"#000000",u=a?.useScheme?"dark":o??"#ffffff",g=K(c??-4,-7,7);let f=e;if(e.a<1){const $=Tr(i??""),w=$?null:cv(l);f=Cl(e,$??w??{r:255,g:255,b:255,a:1})}const p=wl(f),m=(p+.05)/.05,b=1.05/(p+.05);return m+g>=b?d:u},vi=r=>r==null?null:{comparisonKey:bt(r),selectedRgba:Tr(Ca(r))},Pl=(r,a)=>{if(!a)return!1;if(bt(r)===a.comparisonKey)return!0;if(!a.selectedRgba)return!1;const e=Tr(Ca(r));return!!e&&kn(e,a.selectedRgba)},iv=s`--arc•button•bar`,io=s`${iv}•axis`,sv=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${io}: row;

    &[is-flipped] {
      ${io}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${io}: column;

    &[is-flipped] {
      ${io}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${io}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${z}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,zn=({children:r,...a})=>{const{Element:e="menu",orientation:t="horizontal",isFlipped:o=!1,...c}=a;return(0,n.jsx)(e,{...c,"arc-button-bar":t,"is-flipped":o?"":void 0,role:c.role??"group",children:r})};sr("ArcButtonBar",sv);const lv=({activeColor:r})=>{const[a,e]=(0,h.useState)(r),t=r!=null,o=t?r:a;(0,h.useEffect)(()=>{r!=null&&e(r)},[r]);const c=(0,h.useCallback)(i=>{t||e(i)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:e,selectColor:c}},Ml=(r,a)=>hi(r,a)?r:[...r,a],Bl=(r,a)=>{const e=Ml(r.colors??[],a);return e===r.colors?r:{...r,colors:e}},Dl=(r,a)=>{const e=r.colors??[],t=e.filter(o=>!Sn(o,a));return t.length===e.length?r:{...r,colors:t}},Ol=(r,a,e)=>r.map(t=>t.id===a.id?Bl(t,e):t),Fl=(r,a,e)=>r.map(t=>t.id===a.id?Dl(t,e):t),dv=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Ol(r,a,e)}return Bl(r,a)},uv=(r,a,e)=>{if(Array.isArray(r)){if(e===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Fl(r,a,e)}return Dl(r,a)},hv=(r,a,e)=>{const t=r.find(o=>o.id===a);return t?Ol(r,t,e):r},gv=(r,a,e)=>{const t=r.find(o=>o.id===a);return t?Fl(r,t,e):r},vv=({palette:r,isSelectionControlled:a,onAddColor:e,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:c,initialColorValue:i,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:u,hidePopover:g})=>{const f=(0,h.useCallback)(()=>i??Ll(),[i]),[p,m]=(0,h.useState)(null),[b,$]=(0,h.useState)(f),w=(0,h.useCallback)(()=>{m(null),$(f())},[f]),_=(0,h.useCallback)(I=>{o(A=>Ml(A,I))},[o]),y=(0,h.useCallback)((I,A)=>{e?.(r,I,A),t(I),a||c(I)},[t,a,e,r,c]),S=(0,h.useCallback)((I,A)=>{_(I),y(I,A??void 0)},[_,y]),k=(0,h.useCallback)(()=>{if(p!=null)return;const I=f();let A=-1;o(q=>(A=q.length,[...q,I])),m(A),$(I),d?.(!0),l&&u()},[p,f,d,o,l,u]),T=(0,h.useCallback)(I=>{p!=null&&$(I)},[p]),B=(0,h.useCallback)(I=>{I?.preventDefault(),I?.stopPropagation(),p!=null&&o(A=>A.filter((q,V)=>V!==p)),w(),d?.(!1),l&&g()},[p,g,d,w,o,l]),D=(0,h.useCallback)((I,A)=>{const V=(or=>typeof or?.preventDefault=="function")(I)?I:A;if(V?.preventDefault(),V?.stopPropagation(),p==null||b==null){d?.(!1),l&&g();return}const Y=(r.colors??[]).map((or,cr)=>cr===p?b:or);o(Y),y(b,V??void 0),w(),d?.(!1),l&&g()},[p,b,y,g,d,r.colors,w,o,l]),F=(0,h.useCallback)((I,A)=>{A?.preventDefault(),A?.stopPropagation(),S(I,A??void 0)},[S]);return{draftColorIndex:p,draftColorValue:b,startAddDraft:k,updateDraftColor:T,cancelDraftColor:B,saveDraftColor:D,saveCurrentColor:F}},Aa=s`--arc-popover`,$t=s`--arc•color•picker`,Pr=s`${$t}•thumb`,so=s`${$t}•tools`,Qa=s`${$t}•dropper`,Nl=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,Hl={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${Aa}-width: 14em; /* 224px */
    ${Aa}-min-width: 10.5em; /* 140px */
    ${Aa}-max-width: 15.75em; /* 252px */
    ${Aa}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Aa}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Aa}-padding: 0;

    ${Aa}-header-padding: 0.75em 1em;
    ${Aa}-header-background: var(--arc-color-bg-mono);
    ${Aa}-header-align-items: center;

    ${Aa}-body-padding: 0;

    ${Aa}-footer-padding: 1em;
    ${Aa}-footer-background: var(--arc-color-bg-mono);


    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }

    &:has([arc-color-picker=simple]) {
      ${Aa}-width: 12.25em; /* 196px */
    }
  `,PICKER:s`
    ${Pr}•shadow: 0 0 0 0.25em var(--arc-color-alpha-white-95), 0 0 0.375em 0.1875em var(--arc-color-alpha-black-30);
    ${Pr}•size: 0.625em;
    ${Pr}•transition: 200ms ease-out;

    ${$t}•padding: 1em;
    &[is-inline] { ${$t}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Qa}•align•self: end;
      ${so}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},pv=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Pr}•transition), top var(${Pr}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Pr}•size);
    height: var(${Pr}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Pr}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      background var(${Pr}•transition),
      left var(${Pr}•transition),
      top var(${Pr}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,fv=s`

  [arc-color-slider] {
    display: grid;
    gap: 0.375em;

    [arc-label] {
      font-size: 0.75em;
    }

    [arc-color-surface] {
      position: relative;
      display: flex;
      border-radius: var(--arc-border-radius-pill);
      height: 0.875em;
      align-items: center;

      &[arc-color-surface=hue] {
        ${Pr}•bg: var(--js•hue);

        background-image:
          linear-gradient(
            to right,
            #f00 0%,
            #ff0 16.66%,
            #0f0 33.33%,
            #0ff 50%,
            #00f 66.66%,
            #f0f 83.33%,
            #f00 100%
          );
      }

      &[arc-color-surface=alpha] {
        ${Pr}•bg: var(--js•rgb);
        ${Nl}
      }

      &:has(input[type=range]:focus:focus-visible) {
        ::-webkit-slider-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }

        ::-moz-range-thumb {
          outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
          outline-offset: 0.4em;
        }
      }
    }

    input[type=range] {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      appearance: none;
      outline: none;
      cursor: pointer;
      font: inherit;

      /* Track */
      &::-webkit-slider-runnable-track { display: flex; align-items: center; }
      &::-moz-range-track { display: flex; align-items: center; }

      /* Thumb */
      &::-webkit-slider-thumb {
        appearance: none;
        width: var(${Pr}•size);
        height: var(${Pr}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Pr}•shadow);
        background: var(${Pr}•bg);
      }

      &::-moz-range-thumb {
        appearance: none;
        width: var(${Pr}•size);
        height: var(${Pr}•size);
        border: 0;
        border-radius: var(--arc-border-radius-circle);
        box-shadow: var(${Pr}•shadow);
        background: var(${Pr}•bg);
      }
    }
  }

`,Vl=s`3.75em`,mv=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${Vl};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${Vl} 1fr;
    }

    [arc-color-input=alpha] {
      --arc-input-text-align: end;
    }

    [arc-color-input=hex] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }

`,bv=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  [arc-color-tools] {
    display: grid;
    gap: var(${so}•gap, 0.5em);
    grid-template-columns: var(${so}•columns, auto 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${so}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Qa}•align•self, center);
    justify-self: var(${Qa}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Qa}•align•self: end;
    ${Qa}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Qa}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Qa}•justify•self: start;
      ${so}•columns: 1fr auto;
      ${Qa}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Qa}•column, 2);
      grid-row: var(${Qa}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${pv}
  ${fv}
  ${mv}

`,$v=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${Hl.POPOVER}
  }

  [arc-color-picker] {
    ${Hl.PICKER}

     [arc-color-picker-section] {
      padding: var(${$t}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${bv}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,ca=s`--arc•color•chip`,yv=s`
@layer arc-components {

  [arc-color-chip=add-color] {
    ${ca}•radius: var(--arc-border-radius-circle);
    ${ca}•width: var(${v}•24);
    ${ca}•height: var(${v}•24);
  }

  [arc-color-chip=swatch] {
    ${ca}•radius: var(--arc-border-radius-circle);
    ${ca}•width: var(${v}•24);
    ${ca}•height: var(${v}•24);
  }

  [arc-color-chip=color-stop] {
    ${ca}•radius: var(--arc-border-radius-md);
    ${ca}•width: var(${v}•24);
    ${ca}•height: var(${v}•24);
  }

  [arc-color-chip=thumbnail] {
    ${ca}•radius: var(--arc-border-radius-md);
    ${ca}•width: var(${v}•28);
    ${ca}•height: var(${v}•42);
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•color);
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(${ca}•width);
    --arc-button-height: var(${ca}•height);
    --arc-button-border-radius: var(${ca}•radius);
    --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${v}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Nl}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &[is-selected] {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,Ul=(0,h.memo)(({color:r,name:a,kind:e,isDraft:t,isSelected:o,contrastBias:c,contrastBgColor:i,canRemoveColor:l,icon:d,text:u,tooltip:g,onClick:f,style:p,...m})=>{const{cssColor:b,isTranslucent:$,isTransparent:w,opaqueHex:_}=(0,h.useMemo)(()=>Il(r??""),[r]),y=Cn(r??"",a),S=u??y??b,k=(0,h.useMemo)(()=>gi(b,{contrastBias:c,bgColor:i}),[b,c,i]),[T,B]=(0,h.useState)(!1),[D,F]=(0,h.useState)(!1),[I,A]=(0,h.useState)(!1),[q,V]=(0,h.useState)(!1),[Q,Y]=(0,h.useState)(!1);(0,h.useEffect)(()=>{const R=xr=>{(xr.metaKey||xr.key==="Meta")&&(B(!0),A(!0))},tr=xr=>{const Or=xr.metaKey;B(Or),A(Or)},fr=()=>{B(!1),A(!1)};return window.addEventListener("keydown",R),window.addEventListener("keyup",tr),window.addEventListener("blur",fr),()=>{window.removeEventListener("keydown",R),window.removeEventListener("keyup",tr),window.removeEventListener("blur",fr)}},[]);const cr=e==="swatch"&&!!l&&(q&&T||(T||I)&&D),pr=cr||Q,M=pr?"fa-regular fa-xmark":d??"fa-solid fa-check",O=pr?"Remove color":g??y??(Sl(b)?b.toUpperCase():b);(0,h.useEffect)(()=>{cr&&Y(!0)},[cr]),(0,h.useEffect)(()=>{!cr&&o&&!t&&Y(!1)},[t,cr,o]);const N=(0,h.useCallback)(R=>{const tr=cr||R.metaKey?"remove":"select",fr={...Ge(b,{format:"auto",fallbackHex:b}),name:y};f?.({colorData:fr,action:tr,source:e,shouldClosePicker:!1},R)},[cr,f,b,y,e]),L=(0,h.useCallback)(R=>{R.preventDefault(),R.stopPropagation(),N(R)},[N]),rr=(0,h.useCallback)(R=>{R.metaKey&&(R.preventDefault(),R.stopPropagation(),N(R))},[N]),J=(0,h.useCallback)(R=>{const tr=R.propertyName??"";!(tr==="color"||tr.includes("color"))||cr||Y(!1)},[cr]),Z=(0,h.useCallback)(R=>{R.key!=="Enter"||!cr||(R.preventDefault(),R.stopPropagation(),R.currentTarget.click())},[cr]),ur=(0,h.useMemo)(()=>({...p??{},"--js\u2022hex":w?"transparent":$&&(_??b)||"","--js\u2022color":b,"--js\u2022fg":o&&!t||cr?k:""}),[p,w,$,_,b,o,t,cr,k]);return(0,n.jsx)(Cr,{...m,_isCustom:!0,"arc-color-chip":e,layout:"icon",tooltip:O,text:S,icon:M,"is-draft":t?"":void 0,"is-selected":!t&&o?"":void 0,"is-translucent":$?"":void 0,"is-transparent":w?"":void 0,style:ur,onClick:L,onContextMenu:rr,onMouseEnter:R=>{F(!0),A(R.metaKey)},onMouseMove:R=>{A(R.metaKey)},onMouseLeave:()=>{F(!1),A(!1),Y(!1)},onFocus:()=>V(!0),onBlur:()=>{V(!1),Y(!1)},onKeyDown:Z,onTransitionEnd:J})});Ul.displayName="ArcColorSwatch";const pi=Ul;pi.getColorData=Ge,sr("ArcColorSwatch",yv);const xv=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${z}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${z}•4);
      font-size: var(${v}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${z}•4);
      max-width: calc((var(${v}•24) + var(${z}•4)) * 7 + var(${z}•24));
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${z}•8);
      padding-top: var(${z}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${z}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${z}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${v}•10);
    }
  }

}
`,En=({children:r,id:a,heading:e,showHeading:t=!0,colors:o=[],activeColor:c,format:i=Se.format,canAddColor:l=!1,canRemoveColor:d=!1,contrastBgColor:u,addColorFlow:g="standalone",sharedSwatchProps:f,onSwatchClick:p,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:w,..._})=>{const y=g==="embedded",S=Rr(void 0,"add-color-anchor"),k=Rr(void 0,"add-color-popover"),[T,B]=(0,h.useState)(o),[D,F]=(0,h.useState)(!1),{isSelectionControlled:I,activeSelectedColor:A,setUncontrolledSelectedColor:q,selectColor:V}=lv({activeColor:c}),Q=(0,h.useMemo)(()=>vi(A),[A]),Y=(0,h.useMemo)(()=>T.map(ar=>({normalized:bt(ar),rgba:Tr(Ca(ar))})),[T]),or=(0,h.useMemo)(()=>Y.map(ar=>Q?ar.normalized===Q.comparisonKey?!0:!!Q.selectedRgba&&!!ar.rgba&&kn(ar.rgba,Q.selectedRgba):!1),[Y,Q]),cr=(0,h.useMemo)(()=>or.some(Boolean),[or]),pr=!y&&cr?void 0:A;(0,h.useEffect)(()=>{B(o)},[o]);const M=(0,h.useCallback)(ar=>{if(typeof ar=="object"&&ar!==null&&"hsv"in ar){$?.(ar);return}const jr=Ca(ar),ua=Cn(ar),ma=Ge(jr,{format:i});$?.({...ma,name:ua})},[$,i]),O=(0,h.useCallback)(ar=>{F(ar),w?.(a,ar)},[a,w]),N=(0,h.useCallback)(()=>he?.handlePopover?.(k,"show"),[k]),L=(0,h.useCallback)(()=>he?.handlePopover?.(k,"hide"),[k]),rr=(0,h.useMemo)(()=>({id:a,heading:e,showHeading:t,colors:T,activeColor:c,format:i,canAddColor:l,canRemoveColor:d,contrastBgColor:u,addColorFlow:g,sharedSwatchProps:f,onSwatchClick:p,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:w}),[a,e,t,T,c,i,l,d,u,g,f,p,m,b,$,w]),{draftColorIndex:J,draftColorValue:Z,startAddDraft:ur,updateDraftColor:R,cancelDraftColor:tr,saveDraftColor:fr,saveCurrentColor:xr}=vv({palette:rr,isSelectionControlled:I,onAddColor:m,emitColorChange:M,setLocalColors:B,setUncontrolledSelectedColor:q,initialColorValue:pr,shouldOpenPopover:!y,notifyAddColorToggle:O,showPopover:N,hidePopover:L}),Or=(0,h.useMemo)(()=>T.map((ar,jr)=>J===jr&&Z!=null?Z:ar),[J,Z,T]),sa=(0,h.useMemo)(()=>{if(J==null||Z==null||Q==null||J<0||J>=or.length)return or;const ar=[...or];return ar[J]=Pl(Z,Q),ar},[or,J,Z,Q]),ne=(0,h.useMemo)(()=>vi(Z),[Z]),W=(0,h.useMemo)(()=>J==null||ne==null?!1:hi(T,Z,{skipIndex:J}),[J,ne,Z,T]),Br=(0,h.useCallback)((ar,jr)=>{if(!ar?.colorData)return;const ua={color:ar.colorData.value,name:ar.colorData.name};if(ar.action==="remove"&&d){B(ma=>{const $e=ma.filter(Je=>!Sn(Je,ua));return $e.length===ma.length?ma:$e}),b?.(rr,ua,jr);return}V(ua),p?.({...ar,source:"swatch",shouldClosePicker:!1},jr),M(ar.colorData)},[d,M,b,p,rr,V]),hr=(0,h.useCallback)(ar=>J===ar&&Z!=null,[J,Z]);(0,h.useEffect)(()=>{!y||J==null||A==null||R(A)},[A,J,y,R]);const la=(0,h.useCallback)(ar=>{const jr=ar?.newState==="open";F(jr),w?.(a,jr)},[a,w]),da=(0,h.useCallback)(ar=>{const jr=A??Se.color;xr(jr,ar)},[A,xr]),Ka=(0,h.useCallback)(ar=>{ar.key!=="Escape"||!D||tr(ar)},[tr,D]),ce=!A||y&&!D&&cr,Eo=y&&D?"Cancel":y?"Add Current Color":"Add Color",_o=y||!D;let Ga=da;return y||(Ga=D?tr:ur),(0,n.jsxs)("div",{..._,"arc-color-palette":a,"is-adding-color":D?"":void 0,children:[t&&e&&(0,n.jsx)("header",{"arc-color-palette-header":"",children:typeof e=="string"?(0,n.jsx)("strong",{children:e}):(0,n.jsx)(Jr,{...e,layout:"inline",isStrong:!0})}),(0,n.jsxs)("div",{"arc-color-palette-set":"",id:S,children:[Or?.map((ar,jr)=>(0,h.createElement)(pi,{...f,key:`${Ca(ar)}-${jr}`,color:ar,kind:"swatch",isDraft:hr(jr),isSelected:sa[jr],canRemoveColor:d&&!(y&&hr(jr)),contrastBgColor:u,tooltip:y&&hr(jr)?"Save Color":void 0,onClick:y&&hr(jr)?fr:Br})),l&&_o&&(0,n.jsx)(Cr,{"arc-add-color":"",popoverTarget:k,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Eo,onClick:Ga,isDisabled:ce})]}),l&&!y&&(0,n.jsx)(qe,{mode:"add",heading:"",color:Z??Se.color,format:i,onChange:ar=>R(ar.value),popoverProps:{id:k,popover:"manual",anchorAt:"right-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:la,onKeyDown:Ka,footerSlot:(0,n.jsxs)(zn,{"arc-color-picker-button-bar":"",children:[(0,n.jsx)(Cr,{"arc-color-picker-button":"cancel",text:"Cancel",hierarchy:"secondary",size:"sm",onClick:tr}),(0,n.jsx)(Cr,{"arc-color-picker-button":"save",text:"Save",size:"sm",onClick:fr,isDisabled:W})]})}}),r&&(0,n.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};En.addColor=dv,En.removeColor=uv,sr("ArcColorPalette",xv);const kv=(0,h.memo)(function({palette:a,canAddColor:e,canRemoveColor:t,activePaletteColor:o,contrastBgColor:c,onSwatchClick:i,onAddColor:l,onRemoveColor:d}){const u=(0,h.useCallback)((g,f)=>{i(g,f,a.id)},[a.id,i]);return(0,n.jsx)(En,{...a,canAddColor:e??a.canAddColor,canRemoveColor:t,addColorFlow:"embedded",activeColor:o,contrastBgColor:c,onAddColor:l,onRemoveColor:d,onSwatchClick:u})}),Wl=({palettes:r=[],canAddColor:a,canRemoveColor:e,activePaletteColor:t,contrastBgColor:o,selectedNameRef:c,hsvRef:i,popoverId:l,onAddColor:d,onRemoveColor:u,commitLocalHsv:g,...f})=>{const p=(0,h.useRef)(r);p.current=r;const m=(0,h.useCallback)(($,w,_)=>{const y=p.current.find(k=>k.id===_);if(!y)return;if(w?.preventDefault(),w?.stopPropagation(),$?.action==="remove"&&(e??y.canRemoveColor)){y.onSwatchClick?.($,w);return}$?.colorData&&(c.current=$.colorData.name,g($.colorData.hsv));try{y.onSwatchClick?.($,w)}catch{}if(($?.shouldClosePicker??!0)&&l)try{he.handlePopover(l,"hide")}catch{}},[e,g,l,c]),b=(0,h.useCallback)(($,w,_)=>{d?.($,w,_)},[d]);return r.length?(0,n.jsx)("div",{...f,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map($=>(0,n.jsx)(kv,{palette:$,canAddColor:a,canRemoveColor:!!(e??$.canRemoveColor),activePaletteColor:t,contrastBgColor:o,onSwatchClick:m,onAddColor:b,onRemoveColor:u},$.id))}):null},Kl=1,Gl="Please enter six hex digits \u2192 A1B2C3",wv="Use six hex digits (RGB only). Opacity is not editable in this picker.",Cv=/^[0-9A-Fa-f]{3}$/,Av=/^[0-9A-Fa-f]{4}$/,Sv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",zv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Ev=0,_v=255,Ae=r=>r.replace(/#/g,"").trim(),ql=r=>r.length===3?`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:r,lo=r=>Ta({...r,a:1},!1).replace(/^#/,""),Tv=r=>Math.min(_v,Math.max(Ev,Math.round(r))),Yl=r=>{if(Cv.test(r))return{kind:"three",expanded:ql(r)};if(Av.test(r)){const a=Tr(`#${r}`);if(a)return{kind:"four",shorthand:r,expanded:lo(a),alphaPercent:Math.round(a.a*100)}}return null},Iv=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:Gl,jv=(r,a,e)=>{const t=Ae(r),o=Yl(t),c=t.length>0&&(!e&&t.length===8||!a&&t.length!==6&&t.length!==8||Tr(`#${t}`)===null),l=!a&&t.length>0&&t.length!==6&&t.length!==8||!e&&t.length===8?Iv(o):Gl,d=!e&&t.length===8?wv:l;let u="Apply expanded six-digit hex";return o?.kind==="four"?u=`Apply #${o.expanded.toUpperCase()} and ${o.alphaPercent}% opacity`:o?.kind==="three"&&(u=`Apply expanded hex ${o.expanded.toUpperCase()}`),{isInvalid:c,errorAid:{tooltip:d,ariaLabel:u,fix:o}}},Zl=(r,a,e)=>{const t=Tr(`#${r}`);t&&(a(r,{applyHexAlpha:!0}),e(lo(t)))},Rv=(r,a,e,t)=>{if(a){Zl(r,e,t);return}const o=Tr(`#${r}`);if(o){const c=lo(o);t(c),e(c)}},Lv=(r,a,e,t)=>{if(a)Zl(r,e,t);else{const o=r.slice(0,6);t(o),e(o)}},Pv=(r,a,e,t)=>{r.kind==="three"?(e(r.expanded),a(r.expanded)):t?(a(r.shorthand,{applyHexAlpha:!0}),e(r.expanded)):(e(r.expanded),a(r.expanded))},Mv=r=>{const a=Ae(r);return a.length>6?a.slice(0,6):r},Bv=(r,a,e,t,o)=>{const c=Tr(`#${r}`)??a,i={...c,[e]:Tv(c[e]+t*o)};return lo(i)},Dv=(r,a,e,t)=>{if(!e&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!a&&r.length>0){const o=r.length===6||r.length===8,c=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!c)return!1}return!0},Ov=(r,a,e)=>{const t=Tr(`#${r}`);return t?e?.applyHexAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:a.a}:null},yt=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),Fv=r=>(0,n.jsx)(n.Fragment,{children:!!r.children&&(0,n.jsx)("span",{...r})}),fi=({children:r,...a})=>(0,n.jsx)(n.Fragment,{children:!!r&&(0,n.jsx)(Ce,{...a,children:(0,n.jsx)(Ue,{children:r})})}),Nv=({children:r,layout:a,size:e,variant:t,tag:o="span",...c})=>(0,n.jsx)(o,{...c,"data-layout":a,"data-size":e,"data-variant":t,children:r}),Hv=()=>(0,n.jsx)("span",{"input-element":"spacer"}),Vv=r=>(0,n.jsx)(yt,{...r,"input-element":"header"}),Uv=r=>(0,n.jsx)(fi,{...r,"input-element":"header-label"}),Wv=r=>(0,n.jsx)(yt,{...r,"input-element":"header-slot"}),Kv=r=>(0,n.jsx)(yt,{...r,"input-element":"body"}),Gv=r=>(0,n.jsx)(fi,{...r,"input-element":"input-prefix"}),qv=r=>(0,n.jsx)(fi,{...r,"input-element":"input-suffix"}),Yv=r=>(0,n.jsx)(Fv,{...r,"input-element":"input-action"}),Zv=r=>(0,n.jsx)(yt,{...r,"input-element":"footer"}),Xv=r=>(0,n.jsx)(yt,{...r,"input-element":"footer-caption"}),Jv=r=>(0,n.jsx)(yt,{...r,"input-element":"footer-slot"}),Qv=r=>a=>{if(!(a?.target instanceof HTMLInputElement))return;const e={name:a?.target?.name,value:a?.target?.value};r?.(e,a)},$r=s`--arc•input`,pe=s`${$r}•fg`,_n=s`${pe}•disabled`,Tn=s`${pe}•readonly`,In=s`${pe}•invalid`,Ia=s`${$r}•bg`,jn=s`${Ia}•hover`,Rn=s`${Ia}•disabled`,Ln=s`${Ia}•readonly`,Pn=s`${Ia}•invalid`,rp=s`${$r}•align`,Xl=s`${rp}•items`,ap=s`${$r}•flex`,ep=s`${ap}•direction`,Jl=s`${$r}•header`,Mn=s`${Jl}•label•color`,Ql=s`${Jl}•slot•color`,rd=s`${$r}•footer`,mi=s`${rd}•caption•color`,ad=s`${rd}•slot•color`,bi=s`${$r}•border`,$i=s`${bi}•radius`,tp=s`${bi}•width`,ja=s`${bi}•color`,yi=s`${$r}•outline`,ed=s`${yi}•size`,td=s`${yi}•offset`,od=s`${yi}•color`,uo=s`${$r}•height`,op=s`${$r}•padding`,Bn=s`${op}•inline`,xi=s`${Bn}•end`,nd=s`${$r}•slot`,ki=s`${nd}•gap`,wi=s`${nd}•font•size`,Dn=s`${ja}•hover`,On=s`${ja}•disabled`,Ci=s`${ja}•readonly`,ho=s`${ja}•invalid`,np=s`${$r}•action•max•height`,cd=s`${$r}•gap`,Ai=s`${$r}•font•size`,cp=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${uo}: var(${v}•48);
    ${xi}: var(${z}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${uo}: var(${v}•40);
  }

  &[data-size=md] {
    ${uo}: var(${v}•32);
    ${$i}: var(${v}•4);
    ${np}: 80%;
  }

  &:has(select) {
    ${Bn}: 0;
    ${Xl}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Ai}: var(${v}•14);
    ${wi}: var(${v}•12);

    ${uo}: var(${v}•40); /* default size */
    ${cd}: var(${z}•6);
    ${ki}: var(${z}•4);
    ${Bn}: var(${z}•12);
    ${xi}: var(${z}•3);
    ${$i}: var(${v}•8);
    ${tp}: var(${v}•1);
    ${ed}: var(${v}•2);
    ${td}: var(${v}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${$r}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${Ai}: 0.875em; /* 14px at 100% */
      ${wi}: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${pe}: var(--arc-color-fg-primary);
    ${Mn}: inherit;
    ${Ql}: var(--arc-color-fg-secondary);
    ${mi}: var(--arc-color-fg-secondary);
    ${ad}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Ia}: var(--arc-color-bg-primary);
      ${jn}: var(--arc-color-bg-primary);
      ${ja}: var(--arc-color-border-mid);
      ${Dn}: var(--arc-color-border-heavy);

      ${_n}: var(--arc-color-fg-disabled);
      ${Rn}: var(--arc-color-bg-secondary);
      ${On}: var(--arc-color-border-mid);

      ${Tn}: var(--arc-color-fg-primary);
      ${Ln}: var(--arc-color-bg-disabled);
      ${Ci}: var(--arc-color-border-mid);

      ${In}: var(--arc-color-fg-critical-mid);
      ${Pn}: var(--arc-color-bg-primary);
      ${ho}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Ia}: var(--arc-color-bg-secondary);
      ${jn}: var(--arc-color-bg-hover-default);
      ${ja}: transparent;
      ${Dn}: var(--arc-color-border-stark);

      ${In}: var(--arc-color-fg-critical-mid);
      ${Pn}: var(--arc-color-bg-critical-muted);
      ${ho}: transparent;

      ${_n}: var(--arc-color-fg-disabled);
      ${Rn}: var(--arc-color-bg-disabled);
      ${On}: transparent;

      ${Tn}: var(--arc-color-fg-primary);
      ${Ln}: var(--arc-color-bg-disabled);
      ${ho}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Ia}: transparent;
      ${jn}: var(--arc-color-bg-hover-default);
      ${ja}: transparent;
      ${Dn}: transparent;

      ${In}: var(--arc-color-fg-critical-mid);
      ${Pn}: transparent;
      ${ho}: var(--arc-color-fg-critical-mid);

      ${_n}: var(--arc-color-fg-disabled);
      ${Rn}: transparent;
      ${On}: transparent;

      ${Tn}: var(--arc-color-fg-primary);
      ${Ln}: var(--arc-color-bg-disabled);
      ${Ci}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${$r}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${ja}: var(--arc-input-border-color-hover, var(${Dn}));
      ${Ia}: var(--arc-input-background-hover, var(${jn}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${od}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${$r}•cursor: default;
    ${pe}: var(${Tn});
    ${Ia}: var(${Ln});
    ${ja}: var(${Ci});
  }

  &:has(input:disabled, select:disabled) {
    ${$r}•cursor: not-allowed;
    ${pe}: var(${_n});
    ${Ia}: var(${Rn});
    ${ja}: var(${On});
    ${Mn}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Ia}: var(${Pn});
    ${Mn}: var(${pe});
    ${ja}: var(${ho});
    ${mi}: var(${In});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${$r}•display: flex;
  }

  &[data-layout=hug] {
    ${$r}•display: inline-flex;
  }

  & {
    ${$r}•border: var(--arc-border-width-sm) solid var(${ja});
    ${$r}•outline: var(${ed}) solid var(${od}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${$r}•display, flex);
  flex-direction: var(${ep}, column);
  gap: var(${ki});
  color: var(--arc-input-color, var(${pe}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${wi}));
    gap: var(${ki});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${Mn}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Ql}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${mi}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${ad}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${Xl}, center);
    gap: var(--arc-input-gap, var(${cd}));
    height: var(${uo});
    font-size: var(${Ai});

    color: var(--arc-input-color, var(${pe}));
    background-color: var(--arc-input-background, var(${Ia}));
    border: var(--arc-input-border, var(${$r}•border));
    border-radius: var(--arc-input-border-radius, var(${$i}));
    outline: var(${$r}•outline, none);
    outline-offset: var(${td});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${$r}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Bn}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${xi});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${$r}•action•max•height, unset);
    }
  }
}

}
`,ip={onChangeHandler:Qv,Wrapper:Nv,Spacer:Hv,Header:Vv,HeaderLabel:Uv,HeaderSlot:Wv,InputBody:Kv,InputPrefix:Gv,InputSuffix:qv,InputAction:Yv,Footer:Zv,FooterCaption:Xv,FooterSlot:Jv};sr("ArcInput",cp);const zr=ip,sp="[input-element=body]",lp=100;function dp({inputRef:r,onChange:a,enabled:e,deltaPerStep:t=lp}){const o=(0,h.useRef)(a);o.current=a,(0,h.useEffect)(()=>{if(!e||t<=0)return;let c=0;const i=()=>r.current,l=()=>{const b=i()?.closest(sp);return b instanceof HTMLElement?b:null},d=(m,b)=>{const $=o.current;if(!$)return;const w={name:m.name,value:b};$(w,{target:m,currentTarget:m})},u=()=>{c=0},g=m=>{const b=i();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;m.preventDefault(),m.stopPropagation();const $=Number(b.step)||1,w=Number(b.min),_=Number(b.max),y=Number.isFinite(w)?w:void 0,S=Number.isFinite(_)?_:void 0;let k=Number(b.value);if(!Number.isFinite(k))return;c+=m.deltaY;const T=t,B=()=>{const I=Math.max(y??-1/0,k-$);return I===k?!1:(k=I,d(b,String(I)),!0)},D=()=>{const I=Math.min(S??1/0,k+$);return I===k?!1:(k=I,d(b,String(I)),!0)};for(;c>=T;){if(!B()){c=0;break}c-=T}for(;c<=-T;){if(!D()){c=0;break}c+=T}},f=l(),p=i();if(!(!f||!p||p.type!=="number"))return p.addEventListener("blur",u),f.addEventListener("wheel",g,{passive:!1}),()=>{p.removeEventListener("blur",u),f.removeEventListener("wheel",g)}},[e,t,r])}const Si=X(La,["fill","hug"]),zi=X(ea,["inherit","xl","lg","md"]),id=X(Er,["outline","solid","plain"]),up=Si,hp=zi,gp=X(id,["outline","solid"]),vp=["text","number","password","email","url"],Fn=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",inputProps:t,headerLabel:o,headerSlot:c,inputPrefix:i,inputAction:l,inputSuffix:d,footerCaption:u,footerSlot:g,numberInputWheel:f,...p},m)=>{const{id:b,onChange:$,...w}=t,_="arc-search"in p,y=_?"search":w?.type||"text",S=w?.disabled||void 0,k=w?.readOnly||void 0,T=w?.required||void 0,B=!!(o||c),D=!!(u||g),F=(0,h.useRef)(null),I=(0,h.useCallback)(A=>{F.current=A,Ma(m,A)},[m]);return dp({inputRef:F,onChange:$,enabled:y==="number"&&f!==!1,...typeof f=="object"&&typeof f.deltaPerStep=="number"&&{deltaPerStep:f.deltaPerStep}}),(0,n.jsxs)(zr.Wrapper,{...p,"arc-text-input":"","arc-input":y,layout:r,size:a,variant:e,children:[B&&(0,n.jsxs)(zr.Header,{children:[(0,n.jsx)(zr.HeaderLabel,{htmlFor:b,children:o}),!!c&&(0,n.jsx)(zr.Spacer,{}),(0,n.jsx)(zr.HeaderSlot,{children:c})]}),(0,n.jsxs)(zr.InputBody,{children:[(0,n.jsx)(zr.InputPrefix,{htmlFor:b,children:i}),(0,n.jsx)("input",{...w,..._?{type:y}:{},ref:I,id:b,"arc-input-type":y,onChange:zr.onChangeHandler($),"aria-disabled":S,"aria-readonly":k,"aria-required":T}),(0,n.jsx)(zr.InputSuffix,{htmlFor:b,children:d}),(0,n.jsx)(zr.InputAction,{children:l})]}),D&&(0,n.jsxs)(zr.Footer,{children:[(0,n.jsx)(zr.FooterCaption,{children:u}),!!g&&(0,n.jsx)(zr.Spacer,{}),(0,n.jsx)(zr.FooterSlot,{children:g})]})]})}),sd=({commitDraft:r,setIsEditing:a,onRevert:e})=>{const t=(0,h.useCallback)(()=>{a(!0)},[a]),o=(0,h.useCallback)(()=>{a(!1),r()},[a,r]),c=(0,h.useCallback)(i=>{if(i.key==="Enter"){i.preventDefault(),a(!1),r(),i.currentTarget.blur();return}i.key==="Escape"&&(i.preventDefault(),a(!1),e(),i.currentTarget.blur())},[a,r,e]);return{onFocus:t,onBlur:o,onKeyDown:c}},ld=({hsv:r,draftValue:a,label:e="Hex",showLabel:t=!0,setIsEditing:o,commitDraft:c,setDraftValue:i,expandHexShorthand:l=!1,hasAlphaTools:d=!0})=>{const u=Rr(void 0,"hex-input"),g=(0,h.useRef)(null),f=lo(Va(r)),[p,m]=(0,h.useState)(!1),{isInvalid:b,errorAid:$}=(0,h.useMemo)(()=>jv(a,l,d),[a,l,d]),{onFocus:w,onBlur:_,onKeyDown:y}=sd({commitDraft:c,setIsEditing:o,onRevert:()=>i(f)}),S=(0,h.useCallback)(()=>{m(!0);const A=Ae(a);if(A.length===8){Lv(A,d,c,i),_();return}if(l&&A.length===3){const q=ql(A);i(q),c(q),o(!1),_();return}l&&A.length===4&&Rv(A,d,c,i),_()},[a,l,d,i,c,o,_]),k=(0,h.useCallback)(A=>{if(A.key!=="ArrowUp"&&A.key!=="ArrowDown")return;const q=A.key==="ArrowUp"?Kl:-Kl,V=A.altKey?"r":A.metaKey?"g":"b",Q=A.shiftKey?16:1,Y=Bv(Ae(a),Va(r),V,q,Q);i(Y),c(Y),A.preventDefault()},[a,r,i,c]),T=(0,h.useCallback)(A=>{if(k(A),!A.defaultPrevented){if(A.key==="Enter"){A.preventDefault(),o(!1),A.currentTarget.blur();return}A.key==="Escape"&&y(A)}},[k,o,y]),B=({value:A})=>{const q=A??"",V=d?q:Mv(q);i(V),c(V)},D=b&&p,F=D?$.tooltip:void 0,I=(0,h.useCallback)(()=>{const A=Yl(Ae(a));A&&Pv(A,c,i,d),queueMicrotask(()=>{g.current?.focus()})},[a,c,i,d]);return(0,n.jsx)(Fn,{ref:g,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?e:void 0,inputPrefix:"#",inputAction:D?(0,n.jsx)(Cr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:$.tooltip,"aria-label":$.ariaLabel,onClick:I}):void 0,inputProps:{id:u,placeholder:"...",value:a,pattern:d?Sv:zv,maxLength:d?8:6,title:F,"aria-invalid":D?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:w,onBlur:S,onKeyDown:T,onChange:B}})},Ei=typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",dd=Ei?window.EyeDropper:void 0,ud=dd?new dd:void 0,hd=({onColorPicked:r,...a})=>{const[e,t]=(0,h.useState)(!1),o=async()=>{if(!(!Ei||!ud||e)){t(!0);try{const{sRGBHex:c}=await ud.open();if(typeof r=="function"){const i=Va(An(c,"#000000"));r(Ta({...i,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(c){c instanceof DOMException&&c.name==="AbortError"||console.error("EyeDropper failed:",c)}finally{t(!1)}}};return Ei?(0,n.jsx)("div",{"arc-color-eye-dropper":"",children:(0,n.jsx)(Cr,{...a,onClick:o,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:"Dropper",tooltip:"Pick a color"})}):null},_i=({id:r,kind:a,label:e,value:t,max:o,min:c=0,step:i=1,isDisabled:l=!1,showLabel:d=!1,showTooltip:u=!1,tooltipText:g,onChange:f})=>{const p=Rr(void 0,r),m=o>1&&Number.isInteger(i)&&i>=1?Math.round(t):t,b=K(m,c,o),$=b.toFixed(i.toString().split(".")[1]?.length??0),w=(0,h.useRef)(null),_=o-c,S=`${(_<=0?0:(b-c)/_)*100}%`,k=B=>{const D=B.currentTarget.valueAsNumber,F=Number.isFinite(D)?D:c;f(K(F,c,o))},T=(0,n.jsx)("input",{id:p,type:"range",min:c,max:o,step:i,value:$,disabled:l??void 0,onChange:k,"aria-label":e});return(0,n.jsxs)("div",{"arc-color-slider":a,"data-disabled":l??void 0,children:[d&&!!e&&(0,n.jsx)(Ce,{htmlFor:p,children:(0,n.jsx)("strong",{children:e})}),(0,n.jsx)("div",{"arc-color-surface":a,children:u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:w,"aria-hidden":!0,style:{position:"absolute",left:S,top:"50%",transform:"translate(-50%, -50%)",width:1,height:1,pointerEvents:"none"}}),(0,n.jsx)(nn,{alternateAnchor:w,text:g??$,scheme:"light",isStrong:!1,hasTail:!1,offset:11,children:T})]}):T})]})},pp=196.6,fp=(r,a)=>{const e=r.getContext("2d",{alpha:!1});if(!e)return;const{width:t,height:o}=r;if(!t||!o)return;const c=e.createImageData(t,o),i=c.data;let l=0;for(let d=0;d<o;d+=1){const u=1-(o<=1?0:d/(o-1));for(let g=0;g<t;g+=1){const f=t<=1?0:g/(t-1),p=Va({h:a,s:f,v:u,a:1});i[l++]=Yr(p.r),i[l++]=Yr(p.g),i[l++]=Yr(p.b),i[l++]=255}}e.putImageData(c,0,0)},mp=({value:r,label:a="Color Saturation and Value",step:e=.01,stepLarge:t=.1,isDisabled:o=!1,showLabel:c=!1,onChange:i})=>{const l=Rr(void 0,"color-field"),d=(0,h.useRef)(null),u=(0,h.useRef)(null),g=(0,h.useRef)(null),f=(0,h.useRef)(null),p=(0,h.useRef)(null),m=(0,h.useRef)(null),b=(0,h.useRef)(null),[$,w]=(0,h.useState)(!1),[_,y]=(0,h.useState)(null),S=K(r.saturation,0,1),k=K(r.value,0,1),T=Math.round(S*100),B=Math.round(k*100),D=(0,h.useMemo)(()=>{const M=r.hue;return typeof M=="number"&&Number.isFinite(M)?M:pp},[r.hue]),F=(0,h.useMemo)(()=>ml(D),[D]),I=(0,h.useCallback)((M,O)=>{i({hue:D,saturation:K(M,0,1),value:K(O,0,1)})},[D,i]),A=(0,h.useCallback)((M,O,N)=>{const L=K((M-N.left)/N.width,0,1),rr=K((O-N.top)/N.height,0,1);I(L,1-rr)},[I]),q=(0,h.useCallback)(M=>{if(o)return;const{clientX:O,clientY:N,pointerId:L,currentTarget:rr}=M,J=rr.getBoundingClientRect();f.current=L,g.current=J,p.current={clientX:O,clientY:N},m.current=null,b.current=null,rr.focus(),rr.setPointerCapture(L),w(!0),A(O,N,J)},[o,A]),V=(0,h.useCallback)(M=>{if(o)return;const{clientX:O,clientY:N,currentTarget:L,pointerId:rr}=M;if(f.current!==rr)return;const J=g.current??L.getBoundingClientRect();if(M.shiftKey){const Z=p.current;if(Z){if(m.current===null){const fr=Math.abs(O-Z.clientX),xr=Math.abs(N-Z.clientY);m.current=fr>=xr?"s":"v",b.current={clientX:O,clientY:N}}const ur=b.current??Z,R=m.current==="s"?O:ur.clientX,tr=m.current==="v"?N:ur.clientY;A(R,tr,J);return}}else m.current=null,b.current=null;A(O,N,J)},[o,A]),Q=(0,h.useCallback)(()=>{f.current=null,g.current=null,p.current=null,m.current=null,b.current=null,w(!1)},[]),Y=(0,h.useCallback)(M=>{if(o)return;const O=M.shiftKey?t:e;let N=S,L=k;switch(M.key){case"ArrowLeft":N=S-O;break;case"ArrowRight":N=S+O;break;case"ArrowUp":L=k+O;break;case"ArrowDown":L=k-O;break;case"Home":N=0,L=1;break;case"End":N=1,L=0;break;default:return}M.preventDefault(),I(N,L)},[o,e,t,I,S,k]),or=(0,h.useCallback)(M=>{if(o||!M.key.startsWith("Arrow"))return;const O=M.shiftKey?t:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-O:O;M.preventDefault(),I(S+N,k)},[o,e,t,I,S,k]),cr=(0,h.useCallback)(M=>{if(o||!M.key.startsWith("Arrow"))return;const O=M.shiftKey?t:e,N=M.key==="ArrowLeft"||M.key==="ArrowDown"?-O:O;M.preventDefault(),I(S,k+N)},[o,e,t,I,S,k]),pr=(0,h.useMemo)(()=>({"--js\u2022s":String(S),"--js\u2022v":String(1-k)}),[S,k]);return(0,h.useLayoutEffect)(()=>{const M=d.current,O=u.current;if(!M||!O)return;const N=()=>{const J=M.getBoundingClientRect(),Z=Math.max(1,Math.round(J.width)),ur=Math.max(1,Math.round(J.height)),R=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),tr=Math.max(1,Math.round(Z*R)),fr=Math.max(1,Math.round(ur*R));O.width!==tr&&(O.width=tr),O.height!==fr&&(O.height=fr),fp(O,F)};N();const L=new ResizeObserver(()=>{N()});L.observe(M);const rr=()=>{N()};return O.addEventListener("contextrestored",rr),()=>{L.disconnect(),O.removeEventListener("contextrestored",rr)}},[F]),(0,n.jsxs)("div",{"arc-color-field":"","is-disabled":o?"":void 0,"is-interacting":$?"":void 0,"sr-focus":_??void 0,children:[c&&!!a&&(0,n.jsx)("label",{htmlFor:l,children:a}),(0,n.jsxs)("div",{id:l,ref:d,"arc-color-surface":"field",style:pr,tabIndex:o?-1:0,role:"application","aria-label":a,"aria-describedby":`${l}-readout`,onPointerDown:q,onPointerMove:V,onPointerUp:Q,onPointerCancel:Q,onKeyDown:Y,children:[(0,n.jsx)("canvas",{ref:u,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":_==="saturation"?"":void 0,"aria-hidden":"true"}),(0,n.jsx)("div",{"arc-color-field-slice":"value","has-focus":_==="value"?"":void 0,"aria-hidden":"true"})]}),(0,n.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,n.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:o?-1:0,"aria-label":"Saturation","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":T,onKeyDown:or,onFocus:()=>y("saturation"),onBlur:()=>y(null)}),(0,n.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:o?-1:0,"aria-label":"Value","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":B,onKeyDown:cr,onFocus:()=>y("value"),onBlur:()=>y(null)})]}),(0,n.jsxs)("div",{id:`${l}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:["Saturation ",T,"%. Value ",B,"%."]})]})},bp=({hsv:r,draftValue:a,label:e="Opacity",showLabel:t=!1,setIsEditing:o,commitDraft:c,setDraftValue:i})=>{const l=Rr(void 0,"alpha-input"),{onFocus:d,onBlur:u,onKeyDown:g}=sd({commitDraft:c,setIsEditing:o,onRevert:()=>i(mt(r.a))}),f=({value:p})=>{const m=String(p??1);i(m),c(m)};return(0,n.jsx)(Fn,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?e:void 0,numberInputWheel:{deltaPerStep:24},inputProps:{id:l,"aria-label":e,placeholder:"...",value:a,type:"number",min:0,max:100,step:1,onFocus:d,onBlur:u,onKeyDown:g,onChange:f}})},gd=r=>Ta({...r,a:1},!1).replace(/^#/,""),$p=()=>typeof window<"u"&&"EyeDropper"in window,vd=({color:r,hsv:a,isSimpleMode:e,selectedNameRef:t,hsvRef:o,commitLocalHsv:c,tools:i,expandHexShorthand:l,...d})=>{const u=(0,h.useRef)(!1),[g,f]=(0,h.useState)(()=>{const L=Tr(Ca(r));return L?gd(L):"000000"}),[p,m]=(0,h.useState)(mt(a.a)),[b,$]=(0,h.useState)(!1),w=(0,h.useCallback)(L=>{t.current=void 0;const J={...o.current,...L};c(J)},[c,o,t]),_=(0,h.useCallback)(L=>w({s:L.saturation,v:L.value}),[w]),y=L=>{const rr=An(L,"#000000");c(rr)},S=(0,h.useMemo)(()=>!i||i.includes("color-field"),[i]),k=(0,h.useMemo)(()=>!i||i.includes("hue-slider"),[i]),T=(0,h.useMemo)(()=>!i||i.includes("alpha-slider"),[i]),B=(0,h.useMemo)(()=>!i||i.includes("hex-input"),[i]),D=(0,h.useMemo)(()=>!i||i.includes("alpha-input"),[i]),F=(0,h.useMemo)(()=>!i||i.includes("eye-dropper")&&$p(),[i]),I=(0,h.useMemo)(()=>T||D,[T,D]),A=(L,rr)=>{t.current=void 0;const J=Ae(L??g);if(!Dv(J,l??!1,I,rr))return;const Z=Va(o.current),ur=Ov(J,Z,rr);if(!ur||oi(ur,Z))return;const R=oo(ur,o.current.h);c(R)},q=L=>{t.current=void 0;const rr=_l(L??p);rr!=null&&(w({a:rr}),m(mt(rr)))},V=(0,h.useCallback)(L=>{f(Ae(L))},[]),Q=(0,h.useCallback)(L=>{m(L)},[]),Y=(0,h.useCallback)(L=>{u.current=L},[]),or=(0,h.useCallback)(L=>{$(L),L&&m(mt(o.current.a))},[o]);(0,h.useEffect)(()=>{if(u.current)return;const L=Va(a),rr=gd(L);f(J=>{if(J===rr)return J;if(!l){const Z=Ae(J);if(Z.length===3||Z.length===4||Z.length===8){const ur=Tr(`#${Z}`);if(ur){const R={...ur,a:L.a};if(oi(R,L))return J}}}return rr})},[a,l]);const cr=(0,h.useMemo)(()=>b?p:mt(a.a),[b,p,a.a]),pr=(0,h.useMemo)(()=>({hue:a.h,saturation:a.s,value:a.v}),[a]),M=(0,h.useMemo)(()=>K(Math.round(a.a*100),0,100),[a.a]),O=(0,h.useMemo)(()=>`${M.toString()}%`,[M]),N=(0,h.useMemo)(()=>`${Math.round(a.h).toString()}\xB0`,[a.h]);return(0,n.jsx)("div",{...d,"arc-color-tools":e?"simple":"","arc-color-picker-section":"tools",children:e?(0,n.jsxs)(n.Fragment,{children:[B&&(0,n.jsx)(ld,{hsv:a,draftValue:g,setIsEditing:Y,commitDraft:A,setDraftValue:V,expandHexShorthand:l,hasAlphaTools:I}),F&&(0,n.jsx)(hd,{onColorPicked:y}),T&&(0,n.jsx)(_i,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!0,showTooltip:!0,tooltipText:O,onChange:L=>w({a:L/100})})]}):(0,n.jsxs)(n.Fragment,{children:[S&&(0,n.jsx)(mp,{value:pr,onChange:_}),F&&(0,n.jsx)(hd,{onColorPicked:y}),(k||T)&&(0,n.jsxs)("div",{"arc-color-sliders":"",children:[k&&(0,n.jsx)(_i,{kind:"hue",value:a.h,min:0,max:360,step:1,id:"hue-slider",label:"Hue",showLabel:!1,showTooltip:!0,tooltipText:`Hue: ${N}`,onChange:L=>w({h:L})}),T&&(0,n.jsx)(_i,{kind:"alpha",value:M,min:0,max:100,step:1,id:"alpha-slider",label:"Opacity",showLabel:!1,showTooltip:!0,tooltipText:`Opacity: ${O}`,onChange:L=>w({a:L/100})})]}),(B||D)&&(0,n.jsxs)("div",{"arc-color-inputs":"",children:[B&&(0,n.jsx)(ld,{hsv:a,draftValue:g,setIsEditing:Y,commitDraft:A,setDraftValue:V,expandHexShorthand:l,hasAlphaTools:I}),D&&(0,n.jsx)(bp,{hsv:a,showLabel:!B,draftValue:cr,setIsEditing:or,commitDraft:q,setDraftValue:Q})]})]})})},pd=({heading:r,showGoBack:a,goBackProps:e,...t})=>(0,n.jsx)(he,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:a,goBackProps:e,headerSlot:!!r&&(0,n.jsx)(Jr,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});pd.displayName="ArcColorPickerWrapper";const Se={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},yp={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"round",size:"md"},xp=(r,a)=>r===void 0?!0:a?r.includes("hex-input")||r.includes("eye-dropper")||r.includes("alpha-slider"):r.includes("color-field")||r.includes("eye-dropper")||r.includes("hue-slider")||r.includes("alpha-slider")||r.includes("hex-input")||r.includes("alpha-input"),qe=({children:r,mode:a=Se.mode,color:e=Se.color,format:t=Se.format,heading:o=Se.heading,tools:c,omitTools:i,isInline:l=!1,showGoBack:d=!1,goBackProps:u,palettes:g,popoverProps:f,onChange:p,onAddColor:m,onRemoveColor:b,expandHexShorthand:$,...w})=>{const _=(0,h.useMemo)(()=>Rl(e).color,[e]),y=Rr(f?.id??void 0,"color-picker"),S=(0,h.useMemo)(()=>a==="simple",[a]),[k,T]=(0,h.useState)(()=>{const R=Tr(_);return R?oo(R):{h:0,s:0,v:0,a:1}}),B=(0,h.useRef)(k),D=(0,h.useRef)(_),F=(0,h.useRef)(null),I=(0,h.useRef)(void 0);(0,h.useEffect)(()=>{B.current=k},[k]);const A=(0,h.useCallback)(R=>{if(p)try{const tr=Ge(R,{format:t});D.current=tr.value,F.current=tr.rgba,p({...tr,name:I.current})}catch{}},[p,t]),q=(0,h.useCallback)(R=>{ci(R,B.current)||(B.current=R,T(R),A(R))},[A]),V=(0,h.useMemo)(()=>{const R=S?"":"manual";return f?.popover??R},[f?.popover,S]),Q=(0,h.useMemo)(()=>{const R=Va(k);return{"--js\u2022hue":`hsl(${k.h} 100% 50%)`,"--js\u2022hex":Ta({...R,a:1},!1),"--js\u2022rgb":Ke(R)}},[k]),Y=(0,h.useMemo)(()=>Ke(Va(k)),[k]),or=(0,h.useMemo)(()=>g?.map(R=>({...R,canAddColor:!1,canRemoveColor:!1}))??[],[g]),cr=(0,h.useRef)(null),pr=(0,h.useCallback)(()=>{const R=cr.current;if(!R)return;const tr=S?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';R.querySelector(tr)?.focus()},[S]),M=f?.onToggle,O=(0,h.useCallback)(R=>{R?.newState==="open"&&setTimeout(pr,0),M?.(R)},[pr,M]);(0,h.useEffect)(()=>{if(_!==D.current){D.current=_;try{const R=Tr(_)??{r:0,g:0,b:0,a:1},tr=F.current;if(tr&&ni(R,tr))return;const fr=Va(B.current);if(ni(R,fr))return;I.current=void 0;const xr=oo(R,B.current.h);if(ci(xr,B.current))return;B.current=xr,T(xr)}catch{}}},[_]);const N=(0,h.useMemo)(()=>{const R=c===void 0?[...S?pl:vl]:[...c];if(!i?.length)return R;const tr=new Set(i);return R.filter(fr=>!tr.has(fr))},[c,S,i]),L=(0,h.useMemo)(()=>xp(N,S),[N,S]),rr=(0,h.useMemo)(()=>N.includes("palettes"),[N]),J=(0,n.jsxs)("div",{...w,ref:cr,"arc-color-picker":S?"simple":"","is-inline":l?"":void 0,style:Q,children:[S?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Wl,{palettes:rr?or:void 0,activePaletteColor:Y,commitLocalHsv:q,selectedNameRef:I,hsvRef:B,popoverId:y,onAddColor:m??(()=>{}),onRemoveColor:b}),L&&(0,n.jsx)(vd,{color:_,hsv:k,hsvRef:B,selectedNameRef:I,commitLocalHsv:q,isSimpleMode:S,tools:N,expandHexShorthand:$})]}):(0,n.jsxs)(n.Fragment,{children:[L&&(0,n.jsx)(vd,{color:_,hsv:k,selectedNameRef:I,hsvRef:B,commitLocalHsv:q,tools:N,expandHexShorthand:$}),(0,n.jsx)(Wl,{palettes:rr?g:void 0,activePaletteColor:Y,commitLocalHsv:q,selectedNameRef:I,hsvRef:B,popoverId:y,onAddColor:m??(()=>{}),onRemoveColor:b,"has-divider":L?"top":void 0})]}),r&&(0,n.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(l)return J;const Z=f?.anchorProps??yp,ur=S?{...f,anchorAt:f?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...f,heading:o??void 0,showGoBack:d??void 0,goBackProps:u??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,n.jsx)(pd,{...ur,popover:V,anchorProps:Z,id:y,onToggle:O,children:J})};qe.getColorAs=jl,qe.getColorData=Ge,qe.getContrastColor=gi,qe.addColor=hv,qe.removeColor=gv,sr("ArcColorPicker",$v);const kp=s`--arc•menu`,ze=s`${kp}•item`,wp=s`
@layer arc-components {

  [arc-menu] {
    ${ze}•gap: var(${v}•8);
    ${ze}•fg: inherit;
    ${ze}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${v}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${v}•2));
    padding: var(--arc-menu-padding, var(${v}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ze}•gap));

    background: var(--arc-menu-item-background, var(${ze}•bg));
    color: var(--arc-menu-item-color, var(${ze}•fg));
    padding: var(--arc-menu-item-padding, var(${v}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${ze}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${v}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ze}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`;var Cp;const Ap=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Sp={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Ye={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},zp=({icon:r,onClick:a,...e})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:e}),fd=(r,a)=>{const{icon:e,itemProps:t}=zp(a);switch(r){case"divider":return(0,n.jsx)("hr",{});case"section-label":return(0,n.jsx)(Jr,{...t,...Ye,icon:e,size:"sm",isStrong:!0});case"icon-text":return(0,n.jsx)(Jr,{...t,...Ye,icon:e});case"icon-text-detail":return(0,n.jsx)(Jr,{...t,...Ye,icon:e,isStrong:!0});case"text":return(0,n.jsx)(Jr,{...t,...Ye});case"text-detail":return(0,n.jsx)(Jr,{...t,...Ye,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,n.jsx)(xc,{...t,...Ye,size:"sm"});case"user-detail":return(0,n.jsx)(xc,{...t,...Ye,size:"md",isStrong:!0});default:return r}},Om=r=>Object.fromEntries(Cp.map(a=>[a,fd(a,r)])),Ep=(r,a,e,t)=>{if(t||e==="divider"||!!!(a.href||a.onClick))return;r.currentTarget.closest("[arc-popover]")?.hidePopover?.()},_p=r=>r?.role??Sp[Nn(r)]??"menuitem",Nn=r=>Ap(r)?.find(({test:a})=>a())?.value??"text",md=r=>a=>fd(r,a),Tp=(r,a,e,t)=>{let o=1,c=r;const i=d=>d>=e?0:d+1,l=d=>d<=0?e:d-1;for(;o<=e;){const d=i(c),u=l(c),g={previous:a==="previous"?u:c,actual:c,next:a==="next"?d:c}[a];if(t(g))return g;c=g,o+=1}return-1},Ip=({items:r,filterText:a,renderItem:e,isVisible:t,keepMenuOpen:o,...c})=>{const i=(0,h.useRef)(null),l=(0,h.useRef)([]),[d,u]=(0,h.useState)(-1),[g,f]=(0,h.useState)(!1);(0,h.useEffect)(()=>{t&&i.current&&(l.current=Array.from(i.current.querySelectorAll("[arc-button=custom]")))},[t,r]);const p=(0,h.useCallback)(k=>l.current[k]||null,[]),m=(0,h.useMemo)(()=>a?r.filter(k=>Object.values(k).some(T=>T===a)):r,[r,a]),b=Math.max(m.length-1,0),$=(0,h.useCallback)((k,T)=>{const B=Tp(k,T,b,p);u(B),p(B)?.focus()},[b,p]),w=(0,h.useCallback)((k,T)=>()=>{!g&&T&&$(k,"actual")},[g,$]),_={ArrowUp:k=>$(k,"previous"),ArrowDown:k=>$(k,"next"),Home:()=>$(0,"actual"),End:()=>$(b,"actual")},y=k=>T=>{Object.keys(_).includes(T.key)&&(f(!0),T.stopPropagation(),T.preventDefault(),_[T.key](k))},S=(0,h.useMemo)(()=>m.map((k,T)=>{const{itemId:B,role:D,keepMenuOpen:F,...I}=k,A=Nn(k)||"",q=D||_p(k)||"menuitem",V=T===d;return(0,n.jsx)("li",{"arc-menu-item":A,role:q,onMouseEnter:w(T,!!(k.href||k.onClick)),onClick:Q=>Ep(Q,k,A,F??o),children:e?.(I,T,{filterText:a,isCurrent:V,itemId:B,role:D,keepMenuOpen:F??o})},B??T)}),[d,a,m,o,e,w]);return(0,h.useEffect)(()=>{t&&$(-1,"next")},[t,$]),(0,n.jsx)("ul",{...c,ref:i,"arc-menu":"",role:"menu",onKeyDown:y(d),onMouseLeave:()=>u(-1),onMouseMove:()=>f(!1),tabIndex:t?0:-1,children:S})};sr("ArcMenu",wp);const bd=r=>{const{startSlot:a,endSlot:e,onClick:t,href:o,target:c,containerProps:i,isDisabled:l,"aria-disabled":d,tooltip:u,...g}=r,f=Nn(g),p=(0,h.useMemo)(()=>md(f),[f]),m=d??l,b=f==="divider",$=!!(o||t),w=!b,_=w&&a?"":void 0,y=w&&e?"":void 0,S=(0,h.useMemo)(()=>({...i,onClick:t,tooltip:u,href:o,target:c}),[i,t,u,o,c]),k=(0,h.useMemo)(()=>({...i}),[i]);return $?(0,n.jsxs)(Cr,{...S,"aria-disabled":m?"true":void 0,isDisabled:!!m,_isCustom:!0,"arc-dropdown-item":f??"","has-start-slot":_,"has-end-slot":y,children:[w&&a,(0,n.jsx)(p,{...g,"is-item-content":"interactive"}),w&&e]}):(0,n.jsxs)("div",{...k,"arc-dropdown-item":f??"","has-start-slot":_,"has-end-slot":y,children:[w&&a,(0,n.jsx)(p,{...g,"is-item-content":"inert"}),w&&e]})},jp=s`--arc•dropdown`,Rp=s`${jp}•menu`,aa=s`${Rp}•item`,Lp=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${aa}•padding: var(${z}•8) var(${z}•12);
    ${aa}•min•height: var(${v}•36);
    ${aa}•gap: var(${z}•8);

    &[arc-dropdown-item=text-detail] {
      ${aa}•min•height: var(${v}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${aa}•min•height: var(${v}•32);
    }

    &[arc-dropdown-item=user] {
      ${aa}•min•height: var(${v}•40);

      &:not([has-start-slot]) {
        ${aa}•padding: var(${z}•8) var(${z}•12) var(${z}•8) var(${z}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${aa}•min•height: var(${v}•48);

      &:not([has-start-slot]) {
        ${aa}•padding: var(${z}•8) var(${z}•12) var(${z}•8) var(${z}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${aa}•min•height: var(${v}•8);
      ${aa}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${aa}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${aa}•gap);
    text-align: start;
    min-height: var(${aa}•min•height);

    &:not([arc-button]) {
      padding: var(${aa}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${aa}•padding);
      --arc-button-min-height: var(${v}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,$d=(0,h.forwardRef)((r,a)=>(0,n.jsx)(qt,{...r,ref:a,"arc-dropdown-menu-button":""})),Ti=r=>{const{items:a,renderItem:e,keepMenuOpen:t,...o}=r,[c,i]=(0,h.useState)(!1),l=(0,h.useCallback)((...u)=>{const[g]=u;return e?.(...u)??(0,n.jsx)(bd,{...g})},[e]),d=u=>{i(u.newState==="open"),r?.onToggle?.(u)};return(0,n.jsx)(he,{...o,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,n.jsx)(Ip,{"arc-dropdown-menu":"",items:a??[],renderItem:l,isVisible:c,keepMenuOpen:t})})};$d.displayName="ArcDropdownButton",Ti.Button=$d,Ti.Item=bd,sr("ArcDropdownMenu",Lp);const yd=r=>(0,n.jsx)(Cr,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),Hn=s`--arc•link`,re=s`${Hn}•fg`,go=s`${re}•hover`,vo=s`${re}•disabled`,Ii=s`${Hn}•outline`,xd=s`${Ii}•size`,ji=s`${Ii}•offset`,Pp=s`${Hn}•cursor`,po=s`${Hn}•focus•color`,Mp=s`
@layer arc-components {
${l0}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${re}: currentcolor;
    ${go}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${vo}: color-mix(in srgb, currentcolor, transparent 70%);

    ${po}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${re}: var(--arc-color-fg-primary);
    ${go}: var(--arc-color-fg-secondary);
    ${vo}: var(--arc-color-fg-disabled);
    ${po}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${re}: var(--arc-color-fg-secondary);
    ${go}: var(--arc-color-fg-primary);
    ${vo}: var(--arc-color-fg-disabled);
    ${po}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${re}: var(--arc-color-fg-on-mono-inverse);
    ${go}: var(--arc-link-fg-hover-inverse);
    ${vo}: var(--arc-link-fg-disabled-inverse);
    ${po}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${xd}: 0.125em; /* 2px */
    ${ji}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${re}: var(--arc-link-color-hover, var(${go}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Ii}: var(${xd}) solid var(--arc-link-color-focus, var(${po}));
    ${ji}: var(${ji});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${re}: var(--arc-link-color-disabled, var(${vo}));
    ${Pp}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${re}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${re}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Bp=X(Er,["inherit","primary","secondary","inverse"]),Dp=({children:r,layout:a="gutter",size:e="inherit",variant:t="inherit",tag:o="a",href:c,icon:i,text:l,overflow:d,iconSize:u,gapSize:g,isFlipped:f,isDisabled:p,...m})=>(0,n.jsx)(o,{...m,href:p?void 0:c,"arc-link":"","data-variant":t,"aria-disabled":p,"data-is-disabled":p?"":void 0,children:r||(0,n.jsx)(Jr,{icon:i,text:l,overflow:d,iconSize:u,gapSize:g,size:e,layout:a,isFlipped:f})});sr("ArcLink",Mp);const Op=[...ie],Fp=X(Er,["common"]),Np=X(Er,["common","critical"]),Hp=X(Er,["common","brand","info","success","warning","error","processing"]),Vp=["auto","dark","light","none"],Up=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Wp=X(ea,["xl","lg","md","sm","custom","fullscreen"]),Kp=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Ri=r=>r?.matches(":modal"),Li=(r,a)=>a.target===r,Gp=(r,a)=>a.clientX<r.left||a.clientX>r.right||a.clientY<r.top||a.clientY>r.bottom,fo=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onCloseOverride:t=void 0})=>(o,c)=>i=>{if(i?.preventDefault?.(),i?.stopPropagation?.(),!r?.current){c?.(i);return}if(t){t(o,i,r.current),c?.(i);return}if(a&&o!=="confirm:discard"){e?.(!0);return}r.current?.close(o),e?.(!1),c?.(i)},Pi=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onClose:t,onToggle:o})=>{(0,h.useEffect)(()=>{const c=r.current;if(!c)return;const i=d=>{Ri(c)&&Li(c,d)&&(a?(d.preventDefault(),d.stopPropagation(),e?.(!0)):t?.("outside",d))},l=d=>{Li(c,d)&&(e?.(!1),t?.(c.returnValue,d),o?.(!1,d))};return c.addEventListener("close",l),c.addEventListener("cancel",i),()=>{c.removeEventListener("close",l),c.removeEventListener("cancel",i)}},[r,a,e,t,o])},Mi=({modalRef:r,isOpen:a,isTopLayer:e})=>{(0,h.useEffect)(()=>{const t=r.current;t&&(a&&!t.open&&(e?t.showModal():t.show()),!a&&t.open&&t.close())},[a,e])},Bi=({modalRef:r,isOpen:a,autoFocusId:e})=>{(0,h.useEffect)(()=>{const t=r.current;if(!t||!e||!a)return;const o=t.querySelector(`#${e}`);if(!o||!(o instanceof HTMLElement))return;const c=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(c)},[r,e,a])},kd=(r,a)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(a)||r.target instanceof Node&&a.contains(r.target),wd=({modalRef:r,isOpen:a=!1,closeOnBackdrop:e=!1,attemptCloseModal:t})=>{(0,h.useEffect)(()=>{const o=r.current;if(!o||!a||!e||!Ri(o))return;let c=!1;const i=d=>{c=kd(d,o)},l=d=>{if(c||kd(d,o))return;const u=o.getBoundingClientRect();Gp(u,d)&&t("outside")(d)};return document.documentElement?.addEventListener("pointerdown",i,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",i,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,a,e])},Cd=({modalRef:r,isOpen:a=!1,closeOnEsc:e=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,h.useEffect)(()=>{const c=r.current;if(!c||!a||!e||!Ri(c))return;const i=l=>{if(l.key==="Escape"&&Li(c,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[r,o,a,e,t])},Di=r=>(0,n.jsx)(Cr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),qp=r=>(0,n.jsx)(Cr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),Vn=(0,h.forwardRef)(({inert:r,...a},e)=>(0,n.jsx)("div",{...a,ref:e,"arc-modal-content":"",inert:r}));Vn.displayName="ModalContent";const Ad=({showDivider:r,...a})=>(0,n.jsx)("header",{...a,"arc-modal-header":"","has-divider":r?"":void 0}),Yp=({glyph:r,variant:a="common"})=>(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)(ir,{icon:r,"arc-modal-glyph":"","arc-icon-status":a})}),Oi=r=>{const{titleContent:a,TitleElement:e="h2",...t}=r;return(0,n.jsx)(n.Fragment,{children:a&&(0,n.jsx)(e,{...t,"arc-modal-title":"",children:typeof a=="string"?a:(0,n.jsx)(Jr,{...a})})})},Zp=({message:r,...a})=>(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsx)("p",{...a,"arc-modal-message":"",children:r})}),Fi=({tag:r="section",padding:a,...e})=>(0,n.jsx)(r,{...e,"arc-modal-body":"","data-padding":a==="auto"?void 0:a}),Ni=({showDivider:r,...a})=>(0,n.jsx)("footer",{...a,"arc-modal-footer":"","has-divider":r?"":void 0}),Xp=r=>a=>{if(a.key==="Escape"){if(r==="none"){a.stopPropagation(),a.preventDefault();return}return"escape"}},G=s`--arc•modal`,mo=s`${G}•layout`,Jp=s`${G}•header`,Un=s`${G}•body`,bo=s`${G}•footer`,Sd=s`${G}•fg`,Wn=s`${G}•bg`,ae=s`${G}•backdrop`,Ee=s`${G}•scale`,xt=s`${Jp}•padding`,wr=s`${Un}•padding`,_e=s`${bo}•padding`,Qp=s`
  ${G}•font•size: var(${v}•14);
  ${G}•gap: var(${z}•16);

  ${mo}•rows: auto 1fr auto;
  ${mo}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${mo}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${mo}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${mo}•rows: auto;
  }

  ${Sd}: var(--arc-color-fg-primary);
  ${Wn}: var(--arc-color-bg-primary);
  ${G}•border: none;
  ${G}•border•radius: var(--arc-border-radius-lg);
  ${G}•divider: var(${v}•1) solid var(--arc-color-border-mid);

  ${G}•max•width: calc(100vw - var(${z}•32));
  ${G}•min•width: unset;
  ${G}•width: auto;

  ${G}•max•height: calc(100vh - var(${z}•32));
  ${G}•min•height: unset;
  ${G}•height: max-content;

  ${Ee}: 1;
  ${Ee}•start: 0.95;

  ${Un}•text•align: unset;
  ${bo}•justify•content: flex-end;

  ${ae}•bg: var(--arc-color-overlay-stark);
  ${ae}•pointer•events: none;
  ${ae}•cursor: default;

  &:where([is-backdrop=light]) {
    ${ae}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${ae}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${ae}•bg: transparent;
  }
`,rf=s`
  &[data-size=sm] {
    ${G}•width: 28em;
  }

  &[data-size=md] {
    ${G}•width: 40em;
  }

  &[data-size=lg] {
    ${G}•width: 50em;
  }

  &[data-size=xl] {
    ${G}•width: 64em;
  }

  &[data-size=custom] {
    ${G}•width: auto;
    ${G}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${G}•width: 100vw;
    ${G}•height: 100vh;
    ${G}•min•width: 100vw;
    ${G}•min•height: 100vh;
    ${G}•max•width: 100vw;
    ${G}•max•height: 100vh;
    ${G}•border•radius: var(--arc-border-radius-none);

    ${Ee}: 1;
    ${Ee}•start: 1.125;
  }
`,af=s`
  &[is-confirm] {
    ${bo}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${Un}•text•align: center;
    ${bo}•justify•content: center;

    ${wr}•block•start: var(${z}•40);
    ${wr}•block•end: var(${z}•20);

    ${_e}•block•start: var(${z}•12);
    ${_e}•block•end: var(${z}•40);

    ${G}•glyph•size: var(${v}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${G}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${G}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${z}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,ef=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${wr}•block•start: var(${z}•10);
    }

    &:has([arc-modal-footer]) {
      ${wr}•block•end: var(${z}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${xt}•block•end: var(${z}•20);
      ${wr}•block•start: var(${z}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${wr}•block•end: var(${z}•20);
      ${_e}•block•start: var(${z}•12);
      ${_e}•block•end: var(${z}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${wr}•inline•start: 0;
      ${wr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${wr}•block•start: 0;
      ${wr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${wr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${wr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${wr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${wr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${wr}•block•start: var(${z}•20);
      ${wr}•inline•end: var(${z}•24);
      ${wr}•block•end: var(${z}•20);
      ${wr}•inline•start: var(${z}•24);
    }

    &:has([arc-modal-go-back]) {
      ${xt}•inline•start: var(${z}•20);
    }

    ${xt}:
      var(${z}•20)
      var(${z}•24)
      var(${xt}•block•end, var(${z}•10))
      var(${xt}•inline•start, var(${z}•24));

    ${wr}:
      var(${wr}•block•start, var(${z}•20))
      var(${wr}•inline•end, var(${z}•24))
      var(${wr}•block•end, var(${z}•20))
      var(${wr}•inline•start, var(${z}•24));

    ${_e}:
      var(${_e}•block•start, var(${z}•10))
      var(${z}•24)
      var(${_e}•block•end, var(${z}•20))
      var(${z}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${wr}: 0;
    }
  }
`,tf=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,of=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${Ee}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${Ee}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Hi=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Qp}
    ${rf}
    ${af}
    ${ef}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Ee}: 1;
      ${Ee}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${Sd}));
    background: var(--arc-modal-background, var(${Wn}));
    border: var(--arc-modal-border, var(${G}•border));
    border-radius: var(--arc-modal-border-radius, var(${G}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${G}•width));
    height: var(--arc-modal-height, var(${G}•height));
    min-width: var(--arc-modal-min-width, var(${G}•min•width));
    min-height: var(--arc-modal-min-height, var(${G}•min•height));
    max-width: var(--arc-modal-max-width, var(${G}•max•width));
    max-height: var(--arc-modal-max-height, var(${G}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${ae}•bg));
      pointer-events: var(${ae}•pointer•events, none);
      cursor: var(${ae}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${G}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${G}•gap));

      padding: var(${xt});
      background: var(--arc-modal-header-background, var(${Wn}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${G}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${z}•4m) var(${z}•8m) var(${z}•4m) var(${z}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${z}•4m) 0 var(${z}•4m) var(${z}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${z}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${z}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${wr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${Un}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${bo}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${G}•gap));

      background: var(--arc-modal-footer-background, var(${Wn}));
      padding: var(--arc-modal-footer-padding, var(${_e}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${G}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${z}•16) var(${z}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${ae}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${z}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${tf}
  ${of}
`,Te={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},zd=({children:r,headerProps:a,bodyProps:e,footerProps:t,...o})=>{const c=(0,h.useRef)(null),{isOpen:i,autoFocusId:l,isTopLayer:d=Te.isTopLayer,isInverse:u=Te.isInverse,scheme:g=Te.scheme,backdropColor:f=Te.backdropColor,variant:p=Te.variant,message:m=Te.message,onCloseOverride:b=Te.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:w,contentRef:_,...y}=o,{slotStart:S,TitleElement:k,titleContent:T,slotEnd:B,...D}=a||{},{primaryButton:F,secondaryButton:I,...A}=t||{},q=!!(T||S||B),V=g==="auto"?void 0:g,Q=!!b,Y=M=>Q?b?.("confirm:discard",M,c.current??void 0):$?.("confirm:discard",M),or=M=>Q?b?.("confirm:cancel",M,c.current??void 0):w?.("confirm:cancel",M);Pi({modalRef:c,onClose:b}),Mi({modalRef:c,isOpen:i,isTopLayer:d}),Bi({modalRef:c,isOpen:i,autoFocusId:l});const cr=M=>{or(M),I?.onClick?.(M)},pr=M=>{Y(M),F?.onClick?.(M)};return(0,n.jsx)("dialog",{...y,ref:c,"arc-modal":"","arc-scheme":u?"inverse":V,"is-confirm":p||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:"none",onKeyDown:Xp("none"),children:(0,n.jsxs)(Vn,{ref:_,children:[q&&(0,n.jsxs)(Ad,{...D,children:[S&&(0,n.jsx)("div",{"header-slot":"start",children:S}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Oi,{TitleElement:k,titleContent:T})}),B&&(0,n.jsx)("div",{"header-slot":"end",children:B})]}),(0,n.jsx)(Fi,{...e,children:r||m&&(0,n.jsx)("p",{style:{margin:0},children:m})}),(0,n.jsx)(Ni,{...A,children:(0,n.jsxs)(zn,{children:[(0,n.jsx)(Cr,{...I,text:I?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:u,onClick:cr}),(0,n.jsx)(Cr,{...F,text:F?.text||"Discard",variant:p??"common",hierarchy:"primary",isInverse:u,onClick:pr})]})})]})})};sr("ArcModalConfirm",Hi);const ia={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},nf=({children:r,confirmProps:a,headerProps:e,bodyProps:t,dismissProps:o,footerProps:c,...i})=>{const l=(0,h.useRef)(null),[d,u]=(0,h.useState)(!1),{isOpen:g,autoFocusId:f,isTopLayer:p=ia.isTopLayer,isInverse:m=ia.isInverse,scheme:b=ia.scheme,backdropColor:$=ia.backdropColor,hasConfirmFlow:w=ia.hasConfirmFlow,hasUnsavedChanges:_=ia.hasUnsavedChanges,onCloseOverride:y=ia.onCloseOverride,bypassConfirmWhen:S=ia.bypassConfirmWhen??{},size:k=ia.size,closeOnBackdrop:T=ia.closeOnBackdrop,closeOnEsc:B=ia.closeOnEsc,showDismiss:D=ia.showDismiss,onActionError:F,onClose:I,onToggle:A,width:q,height:V,style:Q,contentRef:Y,...or}=i,{showGoBack:cr,goBackProps:pr,slotStart:M,TitleElement:O,titleContent:N,slotEnd:L,showDivider:rr=ia.headerProps?.showDivider,...J}=e??{},{slotStart:Z,primaryButton:ur,secondaryButton:R,tertiaryButton:tr,showDivider:fr=ia.footerProps?.showDivider,...xr}=c??{},Or=!!(cr||N||M||L),sa=!!(ur||R||tr),ne=!!(sa||Z),W=!!(w&&_),Br=B?"closerequest":"none",hr=b==="auto"?void 0:b,{didPressEscapeKey:la,didClickBackdrop:da,didClickGoBackButton:Ka,didClickDismissButton:ce,didClickPrimaryButton:zo,didClickSecondaryButton:Eo,didClickTertiaryButton:_o}=S,Ga=fo({modalRef:l,shouldConfirm:W,setIsConfirming:u,onCloseOverride:y});Pi({modalRef:l,shouldConfirm:W,setIsConfirming:u,onClose:I,onToggle:A}),Mi({modalRef:l,isOpen:g,isTopLayer:p}),Bi({modalRef:l,isOpen:g,autoFocusId:f}),wd({modalRef:l,isOpen:g,closeOnBackdrop:T,attemptCloseModal:da?fo({modalRef:l,shouldConfirm:W&&!da,setIsConfirming:u}):Ga}),Cd({modalRef:l,isOpen:g,closeOnEsc:B,closedBy:Br,attemptCloseModal:la?fo({modalRef:l,shouldConfirm:W&&!la,setIsConfirming:u}):Ga});const ar=()=>u(!1),jr=(ma,$e)=>Ga(ma)($e),ua=(ma,$e,Je)=>async ye=>{ye?.preventDefault?.(),ye?.stopPropagation?.();const To=()=>$e?fo({modalRef:l,shouldConfirm:W&&!$e,setIsConfirming:u})(ma,Je?.onCloseCallback)(ye):Ga(ma,Je?.onCloseCallback)(ye);try{await Je?.onClick?.(ye),To()}catch(qa){F?.(qa,{reason:ma,event:ye})}};return(0,n.jsxs)("dialog",{...or,ref:l,"arc-modal":"","arc-scheme":m?"inverse":hr,"is-inverse":m?"":void 0,"is-top-layer":p?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":k,closedby:Br,style:{"--arc-modal-width":q??"","--arc-modal-height":V??"",...Q},children:[!Or&&D&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Di,{...o,isInverse:m,onClick:ua("button:dismiss",ce,o)})}),(0,n.jsxs)(Vn,{ref:Y,inert:d?"":void 0,children:[Or&&(0,n.jsxs)(Ad,{...J,showDivider:rr,children:[cr&&(0,n.jsx)("div",{"header-slot":"go-back",children:(0,n.jsx)(qp,{...pr,isInverse:m,onClick:ua("button:back",Ka,pr)})}),M&&(0,n.jsx)("div",{"header-slot":"start",children:M}),(0,n.jsx)("div",{"header-slot":"content",children:(0,n.jsx)(Oi,{TitleElement:O,titleContent:N})}),L&&(0,n.jsx)("div",{"header-slot":"end",children:L}),D&&(0,n.jsx)("div",{"header-slot":"dismiss",children:(0,n.jsx)(Di,{...o,isInverse:m,onClick:ua("button:dismiss",ce,o)})})]}),(0,n.jsx)(Fi,{...t,children:r}),ne&&(0,n.jsxs)(Ni,{...xr,showDivider:fr,children:[Z&&(0,n.jsx)("div",{"footer-slot":"content",children:Z}),sa&&(0,n.jsxs)(zn,{children:[tr&&(0,n.jsx)(Cr,{...tr,text:tr?.text||"Button",isInverse:m,variant:"common",hierarchy:"tertiary",onClick:ua("button:tertiary",_o,tr)}),R&&(0,n.jsx)(Cr,{...R,text:R?.text||"Cancel",isInverse:m,variant:"common",hierarchy:"secondary",onClick:ua("button:secondary",Eo,R)}),ur&&(0,n.jsx)(Cr,{...ur,text:ur?.text||"Action",isInverse:m,variant:"common",hierarchy:"primary",onClick:ua("button:primary",zo,ur)})]})]})]}),w&&(0,n.jsx)(zd,{isOpen:d,isInverse:m,isTopLayer:p,backdropColor:$,...a,onConfirmDiscard:jr,onConfirmCancel:ar})]})};sr("ArcModal",Hi);const fe={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},cf={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,n.jsx)(Tc,{"arc-modal-spinner":""})},sf=({children:r,dismissProps:a,bodyProps:e,footerProps:t,...o})=>{const c=(0,h.useRef)(null),{isOpen:i,autoFocusId:l,isTopLayer:d=fe.isTopLayer,isInverse:u=fe.isInverse,scheme:g=fe.scheme,backdropColor:f=fe.backdropColor,closeOnBackdrop:p=fe.closeOnBackdrop,closeOnEsc:m=fe.closeOnEsc,variant:b=fe.variant,icon:$,TitleElement:w,titleContent:_,message:y,showDismiss:S,onCloseOverride:k=fe.onCloseOverride,onClose:T,onToggle:B,contentRef:D,...F}=o,{primaryButton:I,...A}=t??{},q=$||cf[b],V=m?"closerequest":"none",Q=g==="auto"?void 0:g,Y=fo({modalRef:c,onCloseOverride:k});return Pi({modalRef:c,onClose:T,onToggle:B}),Mi({modalRef:c,isOpen:i,isTopLayer:d}),Bi({modalRef:c,isOpen:i,autoFocusId:l}),wd({modalRef:c,isOpen:i,closeOnBackdrop:p,attemptCloseModal:Y}),Cd({modalRef:c,isOpen:i,closeOnEsc:m,closedBy:V,attemptCloseModal:Y}),(0,n.jsxs)("dialog",{...F,ref:c,"arc-modal":"","arc-scheme":u?"inverse":Q,"is-alert":b||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":f==="auto"?void 0:f,"data-size":"sm",closedby:V,children:[S&&(0,n.jsx)("div",{"arc-modal-dismiss":"",children:(0,n.jsx)(Di,{...a,isInverse:u,onClick:Y("button:dismiss",a?.onClick)})}),(0,n.jsxs)(Vn,{ref:D,children:[(0,n.jsx)(Fi,{...e,children:r||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Yp,{glyph:q,variant:b}),(0,n.jsx)(Oi,{TitleElement:w,titleContent:_}),(0,n.jsx)(Zp,{message:y})]})}),(0,n.jsx)(Ni,{...A,children:(0,n.jsx)(zn,{orientation:"vertical",children:(0,n.jsx)(Cr,{...I,text:I?.text||"Close",variant:"common",hierarchy:"primary",isInverse:u,onClick:Y("button:primary",I?.onClick)})})})]})]})};sr("ArcModalAlert",Hi);const Vr=s`--arc•radio`,lf=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Vr}•font•size: 1em;
      ${Vr}•icon•size: 0.625em;
      ${Vr}•size: 1.125em;
      ${Vr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Vr}•font•size: var(${v}•14);
      ${Vr}•icon•size: var(${v}•10);
      ${Vr}•size: var(${v}•18);
      ${Vr}•gap: var(${v}•8);
    }

    &[data-size=sm] {
      ${Vr}•font•size: var(${v}•12);
      ${Vr}•icon•size: var(${v}•10);
      ${Vr}•size: var(${v}•16);
      ${Vr}•gap: var(${v}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${j}•border•radius: var(--arc-border-radius-circle);
    ${j}•size: var(${Vr}•size);
    ${j}•icon•size: var(${Vr}•icon•size);
    ${j}•width: var(${Vr}•size);
    ${j}•height: var(${Vr}•size);
    ${j}•translate: 0 var(${v}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${Vr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${Vr}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${j}•color: transparent;
      ${j}•background: transparent;
      ${j}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${j}•background: var(--arc-color-bg-theme-subtle);
        ${j}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${j}•background: var(--arc-color-bg-disabled);
        ${j}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${j}•color: var(--arc-color-fg-on-theme-heavy);
      ${j}•background: var(--arc-color-bg-theme-heavy);
      ${j}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${j}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${j}•color: var(--arc-color-fg-on-theme-mid);
        ${j}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,df=X(La,["hug","fill"]),uf=X(ea,["inherit","md","sm"]),Ed=({children:r,label:a,layout:e,size:t="md",useMask:o=!0,...c})=>{const{className:i,title:l,...d}=c,u={className:i,title:l},g=r??a,f=(0,n.jsx)(eo,{...d,type:"radio"}),p=o&&(0,n.jsxs)($n,{type:"radio",children:[f,(0,n.jsx)(ir,{icon:"fa-solid fa-circle-small arc-fw"})]}),m=!!g&&(0,n.jsxs)(Ce,{layout:e,children:[p||f,(0,n.jsx)(Ue,{children:g})]});return(0,n.jsx)("span",{...u,"arc-radio":"","data-size":t,children:m||p||f})};sr("ArcRadio",lf);const pa=s`--arc•rb`,lr=s`${pa}•o`,hf=s`
@layer arc-components {

  [arc-radio-bar] {
    ${pa}•font•size: var(${v}•14);
    ${pa}•border•radius: var(${v}•8);
    ${pa}•background: var(--arc-color-bg-secondary);
    ${pa}•padding: var(${v}•4);
    ${pa}•gap: var(${v}•2);

    ${lr}•color: var(--arc-color-fg-secondary);
    ${lr}•background: var(--arc-color-alpha-black-0);
    ${lr}•border•color: var(--arc-color-alpha-black-0);
    ${lr}•border•width: var(${v}•1);
    ${lr}•border•radius: var(${v}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${lr}•size: var(${v}•32);
      ${lr}•line•height: var(${v}•30); /* • -2px to account for border-width (top/bottom) */
      ${lr}•icon•padding: var(${v}•8);
      ${lr}•text•padding: var(${v}•12);
    }

    &[data-size=md] {
      ${lr}•size: var(${v}•24);
      ${lr}•line•height: var(${v}•22); /* • -2px to account for border-width (top/bottom) */
      ${lr}•icon•padding: var(${v}•6);
      ${lr}•text•padding: var(${v}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${pa}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${pa}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${lr}•color: var(--arc-color-fg-on-hover-default);
        ${lr}•background: var(--arc-color-bg-hover-default);
        ${lr}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${lr}•color: var(--arc-color-mono-black);
      ${lr}•background: var(--arc-color-mono-white);
      ${lr}•border•color: var(--arc-color-border-stark);
      ${lr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${lr}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${lr}•outline: var(${lr}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${pa}•font•size));
    display: var(${pa}•display);
    gap: var(${pa}•gap);
    border-radius: var(${pa}•border•radius);
    background: var(${pa}•background);
    padding: var(${pa}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${lr}•border•radius);
      outline: var(${lr}•outline, none);
      outline-offset: var(${lr}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${lr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${lr}•size);
      min-width: var(${lr}•size);

      border-radius: var(${lr}•border•radius);
      border: var(${lr}•border•width) solid var(${lr}•border•color);
      background: var(${lr}•background);
      color: var(${lr}•color);
      font-weight: var(${lr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${lr}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${lr}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,gf=X(La,["hug","fill"]),vf=X(ea,["lg","md"]),pf=({children:r,label:a,icon:e,...t})=>{const o=r||(0,n.jsx)(Jr,{icon:e,text:a});return(0,n.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,n.jsx)(Ed,{...t,label:o,layout:"fill",useMask:!1})})},ff=({children:r,size:a="lg",layout:e="hug",...t})=>(0,n.jsx)("ul",{...t,"arc-radio-bar":"","data-size":a,"data-layout":e,role:"radiogroup",children:r});sr("ArcRadioBar",hf);var _d=ha(98998),Ur,Ir,Ua,me;function mf(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[a,e]=Ur(r),t=Ir(()=>{e(!0)},[]),o=Ir(()=>{e(!1)},[]),c=Ir(()=>{e(i=>!i)},[]);return{value:a,setValue:e,setTrue:t,setFalse:o,toggle:c}}var Wa=typeof window<"u"?h.useLayoutEffect:h.useEffect;function Ra(r,a,e,t){const o=(0,h.useRef)(a);Wa(()=>{o.current=a},[a]),(0,h.useEffect)(()=>{const c=e?.current??window;if(!(c&&c.addEventListener))return;const i=l=>{o.current(l)};return c.addEventListener(r,i,t),()=>{c.removeEventListener(r,i,t)}},[r,e,t])}function Fm(r){Ra("click",a=>{r(a)})}function Nm(){const[r,a]=Ur(null),e=Ir(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),a(t),!0}catch(o){return console.warn("Copy failed",o),a(null),!1}},[]);return[r,e]}function bf(r){const[a,e]=Ur(r??0),t=Ir(()=>{e(i=>i+1)},[]),o=Ir(()=>{e(i=>i-1)},[]),c=Ir(()=>{e(r??0)},[r]);return{count:a,increment:t,decrement:o,reset:c,setCount:e}}function $f(r,a){const e=Ua(r);Wa(()=>{e.current=r},[r]),me(()=>{if(a===null)return;const t=setInterval(()=>{e.current()},a);return()=>{clearInterval(t)}},[a])}function Hm({countStart:r,countStop:a=0,intervalMs:e=1e3,isIncrement:t=!1}){const{count:o,increment:c,decrement:i,reset:l}=bf(r),{value:d,setTrue:u,setFalse:g}=mf(!1),f=Ir(()=>{g(),l()},[g,l]),p=Ir(()=>{if(o===a){g();return}t?c():i()},[o,a,i,c,t,g]);return $f(p,d?e:null),[o,{startCountdown:u,stopCountdown:g,resetCountdown:f}]}function Kn(r){const a=(0,h.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Wa(()=>{a.current=r},[r]),(0,h.useCallback)((...e)=>{var t;return(t=a.current)==null?void 0:t.call(a,...e)},[a])}var Vi=typeof window>"u";function Ui(r,a,e={}){const{initializeWithValue:t=!0}=e,o=(0,h.useCallback)(p=>e.serializer?e.serializer(p):JSON.stringify(p),[e]),c=(0,h.useCallback)(p=>{if(e.deserializer)return e.deserializer(p);if(p==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(p)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),i=(0,h.useCallback)(()=>{const p=a instanceof Function?a():a;if(Vi)return p;try{const m=window.localStorage.getItem(r);return m?c(m):p}catch(m){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,m),p}},[a,r,c]),[l,d]=(0,h.useState)(()=>t?i():a instanceof Function?a():a),u=Kn(p=>{Vi&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=p instanceof Function?p(i()):p;window.localStorage.setItem(r,o(m)),d(m),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(m){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,m)}}),g=Kn(()=>{Vi&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const p=a instanceof Function?a():a;window.localStorage.removeItem(r),d(p),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,h.useEffect)(()=>{d(i())},[r]);const f=(0,h.useCallback)(p=>{p.key&&p.key!==r||d(i())},[r,i]);return Ra("storage",f),Ra("local-storage",f),[l,u,g]}var yf=typeof window>"u";function Td(r,{defaultValue:a=!1,initializeWithValue:e=!0}={}){const t=l=>yf?a:window.matchMedia(l).matches,[o,c]=Ur(()=>e?t(r):a);function i(){c(t(r))}return Wa(()=>{const l=window.matchMedia(r);return i(),l.addListener?l.addListener(i):l.addEventListener("change",i),()=>{l.removeListener?l.removeListener(i):l.removeEventListener("change",i)}},[r]),o}var xf="(prefers-color-scheme: dark)",kf="usehooks-ts-dark-mode";function Vm(r={}){const{defaultValue:a,localStorageKey:e=kf,initializeWithValue:t=!0}=r,o=Td(xf,{initializeWithValue:t,defaultValue:a}),[c,i]=Ui(e,a??o??!1,{initializeWithValue:t});return Wa(()=>{o!==c&&i(o)},[o]),{isDarkMode:c,toggle:()=>{i(l=>!l)},enable:()=>{i(!0)},disable:()=>{i(!1)},set:l=>{i(l)}}}function Id(r){const a=(0,h.useRef)(r);a.current=r,(0,h.useEffect)(()=>()=>{a.current()},[])}function Gn(r,a=500,e){const t=(0,h.useRef)();Id(()=>{t.current&&t.current.cancel()});const o=(0,h.useMemo)(()=>{const c=_d(r,a,e),i=(...l)=>c(...l);return i.cancel=()=>{c.cancel()},i.isPending=()=>!!t.current,i.flush=()=>c.flush(),i},[r,a,e]);return(0,h.useEffect)(()=>{t.current=_d(r,a,e)},[r,a,e]),o}function Um(r,a,e){const t=e?.equalityFn??((u,g)=>u===g),o=r instanceof Function?r():r,[c,i]=Ur(o),l=Ua(o),d=Gn(i,a,e);return t(l.current,o)||(d(o),l.current=o),[c,d]}function Wm(r,a={}){const{preserveTitleOnUnmount:e=!0}=a,t=Ua(null);Wa(()=>{t.current=window.document.title},[]),Wa(()=>{window.document.title=r},[r]),Id(()=>{!e&&t.current&&(window.document.title=t.current)})}function Km(r){const[a,e]=Ur(!1),t=()=>{e(!0)},o=()=>{e(!1)};return Ra("mouseenter",t,r),Ra("mouseleave",o,r),a}function Gm({threshold:r=0,root:a=null,rootMargin:e="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:c}={}){var i;const[l,d]=Ur(null),[u,g]=Ur(()=>({isIntersecting:o,entry:void 0})),f=Ua();f.current=c;const p=((i=u.entry)==null?void 0:i.isIntersecting)&&t;me(()=>{if(!l||!("IntersectionObserver"in window)||p)return;let $;const w=new IntersectionObserver(_=>{const y=Array.isArray(w.thresholds)?w.thresholds:[w.thresholds];_.forEach(S=>{const k=S.isIntersecting&&y.some(T=>S.intersectionRatio>=T);g({isIntersecting:k,entry:S}),f.current&&f.current(k,S),k&&t&&$&&($(),$=void 0)})},{threshold:r,root:a,rootMargin:e});return w.observe(l),()=>{w.disconnect()}},[l,JSON.stringify(r),a,e,p,t]);const m=Ua(null);me(()=>{var $;!l&&(($=u.entry)!=null&&$.target)&&!t&&!p&&m.current!==u.entry.target&&(m.current=u.entry.target,g({isIntersecting:o,entry:void 0}))},[l,u.entry,t,p,o]);const b=[d,!!u.isIntersecting,u.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function qm(){const[r,a]=Ur(!1);return me(()=>{a(!0)},[]),r}function wf(){const r=Ua(!1);return me(()=>(r.current=!0,()=>{r.current=!1}),[]),Ir(()=>r.current,[])}function Ym(r=new Map){const[a,e]=Ur(new Map(r)),t={set:Ir((o,c)=>{e(i=>{const l=new Map(i);return l.set(o,c),l})},[]),setAll:Ir(o=>{e(()=>new Map(o))},[]),remove:Ir(o=>{e(c=>{const i=new Map(c);return i.delete(o),i})},[]),reset:Ir(()=>{e(()=>new Map)},[])};return[a,t]}function Zm(r,a,e="mousedown",t={}){Ra(e,o=>{const c=o.target;if(!c||!c.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(c)):r.current&&!r.current.contains(c))&&a(o)},void 0,t)}var jd=typeof window>"u";function Xm(r,a={}){let{initializeWithValue:e=!0}=a;jd&&(e=!1);const t=Ir(d=>{if(a.deserializer)return a.deserializer(d);if(d==="undefined")return;let u;try{u=JSON.parse(d)}catch(g){return console.error("Error parsing JSON:",g),null}return u},[a]),o=Ir(()=>{if(jd)return null;try{const d=window.localStorage.getItem(r);return d?t(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,t]),[c,i]=Ur(()=>{if(e)return o()});me(()=>{i(o())},[r]);const l=Ir(d=>{d.key&&d.key!==r||i(o())},[r,o]);return Ra("storage",l),Ra("local-storage",l),c}var Rd={width:void 0,height:void 0};function Jm(r){const{ref:a,box:e="content-box"}=r,[{width:t,height:o},c]=Ur(Rd),i=wf(),l=Ua({...Rd}),d=Ua(void 0);return d.current=r.onResize,me(()=>{if(!a.current||typeof window>"u"||!("ResizeObserver"in window))return;const u=new ResizeObserver(([g])=>{const f=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",p=Ld(g,f,"inlineSize"),m=Ld(g,f,"blockSize");if(l.current.width!==p||l.current.height!==m){const $={width:p,height:m};l.current.width=p,l.current.height=m,d.current?d.current($):i()&&c($)}});return u.observe(a.current,{box:e}),()=>{u.disconnect()}},[e,a,i]),{width:t,height:o}}function Ld(r,a,e){return r[a]?Array.isArray(r[a])?r[a][0][e]:r[a][e]:a==="contentBoxSize"?r.contentRect[e==="inlineSize"?"width":"height"]:void 0}var Pd=typeof window>"u";function Qm(r={}){let{initializeWithValue:a=!0}=r;Pd&&(a=!1);const e=()=>{if(!Pd)return window.screen},[t,o]=Ur(()=>{if(a)return e()}),c=Gn(o,r.debounceDelay);function i(){const l=e(),d=r.debounceDelay?c:o;if(l){const{width:u,height:g,availHeight:f,availWidth:p,colorDepth:m,orientation:b,pixelDepth:$}=l;d({width:u,height:g,availHeight:f,availWidth:p,colorDepth:m,orientation:b,pixelDepth:$})}}return Ra("resize",i),Wa(()=>{i()},[]),t}var qn=new Map;function Cf(r){const a=document.querySelector(`script[src="${r}"]`),e=a?.getAttribute("data-status");return{node:a,status:e}}function rb(r,a){const[e,t]=Ur(()=>!r||a?.shouldPreventLoad?"idle":typeof window>"u"?"loading":qn.get(r)??"loading");return me(()=>{if(!r||a?.shouldPreventLoad)return;const o=qn.get(r);if(o==="ready"||o==="error"){t(o);return}const c=Cf(r);let i=c.node;if(i)t(c.status??o??"loading");else{i=document.createElement("script"),i.src=r,i.async=!0,a?.id&&(i.id=a.id),i.setAttribute("data-status","loading"),document.body.appendChild(i);const d=u=>{const g=u.type==="load"?"ready":"error";i?.setAttribute("data-status",g)};i.addEventListener("load",d),i.addEventListener("error",d)}const l=d=>{const u=d.type==="load"?"ready":"error";t(u),qn.set(r,u)};return i.addEventListener("load",l),i.addEventListener("error",l),()=>{i&&(i.removeEventListener("load",l),i.removeEventListener("error",l)),i&&a?.removeOnUnmount&&(i.remove(),qn.delete(r))}},[r,a?.shouldPreventLoad,a?.removeOnUnmount,a?.id]),e}var Af=typeof window>"u";function ab(r={}){const{autoLock:a=!0,lockTarget:e,widthReflow:t=!0}=r,[o,c]=Ur(!1),i=Ua(null),l=Ua(null),d=()=>{if(i.current){const{overflow:g,paddingRight:f}=i.current.style;if(l.current={overflow:g,paddingRight:f},t){const p=i.current===document.body?window.innerWidth:i.current.offsetWidth,m=parseInt(window.getComputedStyle(i.current).paddingRight,10)||0,b=p-i.current.scrollWidth;i.current.style.paddingRight=`${b+m}px`}i.current.style.overflow="hidden",c(!0)}},u=()=>{i.current&&l.current&&(i.current.style.overflow=l.current.overflow,t&&(i.current.style.paddingRight=l.current.paddingRight)),c(!1)};return Wa(()=>{if(!Af)return e&&(i.current=typeof e=="string"?document.querySelector(e):e),i.current||(i.current=document.body),a&&d(),()=>{u()}},[a,e,t]),{isLocked:o,lock:d,unlock:u}}var Wi=typeof window>"u";function Sf(r,a,e={}){const{initializeWithValue:t=!0}=e,o=(0,h.useCallback)(p=>e.serializer?e.serializer(p):JSON.stringify(p),[e]),c=(0,h.useCallback)(p=>{if(e.deserializer)return e.deserializer(p);if(p==="undefined")return;const m=a instanceof Function?a():a;let b;try{b=JSON.parse(p)}catch($){return console.error("Error parsing JSON:",$),m}return b},[e,a]),i=(0,h.useCallback)(()=>{const p=a instanceof Function?a():a;if(Wi)return p;try{const m=window.sessionStorage.getItem(r);return m?c(m):p}catch(m){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,m),p}},[a,r,c]),[l,d]=(0,h.useState)(()=>t?i():a instanceof Function?a():a),u=Kn(p=>{Wi&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=p instanceof Function?p(i()):p;window.sessionStorage.setItem(r,o(m)),d(m),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(m){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,m)}}),g=Kn(()=>{Wi&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const p=a instanceof Function?a():a;window.sessionStorage.removeItem(r),d(p),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,h.useEffect)(()=>{d(i())},[r]);const f=(0,h.useCallback)(p=>{p.key&&p.key!==r||d(i())},[r,i]);return Ra("storage",f),Ra("session-storage",f),[l,u,g]}function eb(r){const[a,e]=Ur(1),t=a+1<=r,o=a-1>0,c=Ir(u=>{const g=u instanceof Function?u(a):u;if(g>=1&&g<=r){e(g);return}throw new Error("Step not valid")},[r,a]),i=Ir(()=>{t&&e(u=>u+1)},[t]),l=Ir(()=>{o&&e(u=>u-1)},[o]),d=Ir(()=>{e(1)},[]);return[a,{goToNextStep:i,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:c,reset:d}]}var zf="(prefers-color-scheme: dark)",Ef="usehooks-ts-ternary-dark-mode";function tb({defaultValue:r="system",localStorageKey:a=Ef,initializeWithValue:e=!0}={}){const t=Td(zf,{initializeWithValue:e}),[o,c]=Ui(a,r,{initializeWithValue:e});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:c,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];c(u=>{const g=(d.indexOf(u)+1)%d.length;return d[g]})}}}function ob(r,a){const e=Ua(r);Wa(()=>{e.current=r},[r]),me(()=>{if(!a&&a!==0)return;const t=setTimeout(()=>{e.current()},a);return()=>{clearTimeout(t)}},[a])}function nb(r){const[a,e]=Ur(!!r),t=Ir(()=>{e(o=>!o)},[]);return[a,t,e]}var _f=typeof window>"u";function cb(r={}){let{initializeWithValue:a=!0}=r;_f&&(a=!1);const[e,t]=Ur(()=>a?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=Gn(t,r.debounceDelay);function c(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return Ra("resize",c),Wa(()=>{c()},[]),e}const Tf=(r,a)=>{const e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;e?e.call(r,a):r.value=a,r.dispatchEvent(new Event("input",{bubbles:!0}))},If=({defaultValue:r="",value:a,debounceMs:e,inputElementRef:t,onClear:o,onKeyDown:c,onSearch:i})=>{const l=a!==void 0,d=i!==void 0&&e!==void 0,[u,g]=(0,h.useState)(r),f=l?a??"":u,p=(0,h.useRef)(!1),m=Gn(y=>{i?.(y)},e??0),b=(0,h.useCallback)(()=>{m.cancel()},[m]),$=(0,h.useCallback)(y=>{l||g(y)},[l]);(0,h.useEffect)(()=>b,[b]),(0,h.useEffect)(()=>{if(d){if(!p.current){p.current=!0;return}b(),m(f)}},[b,m,f,d]);const w=(0,h.useCallback)(()=>{b();const y=t.current;if(y){Tf(y,""),o?.(),y.focus();return}l||g(""),o?.()},[b,t,l,o]),_=(0,h.useCallback)(y=>{c?.(y),!(y.defaultPrevented||y.key!=="Enter"||!i)&&(b(),i(f))},[b,c,i,f]);return{resolvedValue:f,handleValueChange:$,handleClear:w,handleKeyDown:_}},jf=Si,Rf=zi,Lf=X(id,["outline","solid"]),Md="Search",Pf="Clear search",Ki={layout:"hug",size:"inherit",variant:"outline"},Mf=({canClear:r,isDisabled:a,onClear:e})=>{if(r)return(0,n.jsx)(yd,{"aria-label":Pf,disabled:a,icon:"fa-regular fa-xmark",onClick:e})},Bf=({ariaLabel:r,ariaLabelledBy:a,headerLabel:e})=>r??(!e&&!a?Md:void 0),Bd=(0,h.forwardRef)(({debounceMs:r,inputProps:a,layout:e=Ki.layout,onClear:t,onSearch:o,size:c=Ki.size,variant:i=Ki.variant,headerLabel:l,headerSlot:d,footerCaption:u,footerSlot:g,onChange:f,...p},m)=>{const{id:b,value:$,defaultValue:w="",onChange:_,onKeyDown:y,placeholder:S=Md,disabled:k,readOnly:T,required:B,"aria-label":D,"aria-labelledby":F,...I}=a,A=Rr(b,"arc-search"),q=(0,h.useRef)(null),{resolvedValue:V,handleValueChange:Q,handleClear:Y,handleKeyDown:or}=If({defaultValue:w,value:$,debounceMs:r,inputElementRef:q,onClear:t,onKeyDown:y,onSearch:o}),cr=!k&&!T&&V.length>0,pr=Bf({ariaLabel:D,ariaLabelledBy:F,headerLabel:l}),M=Mf({canClear:cr,isDisabled:k,onClear:Y}),O=L=>{q.current=L,Ma(m,L)},N=(L,rr)=>{Q(rr.target.value),_?.(L,rr)};return(0,n.jsx)(Fn,{...p,"arc-search":"",layout:e,size:c,variant:i,ref:O,onChange:f,headerLabel:l,headerSlot:d,inputPrefix:(0,n.jsx)(ir,{icon:"fa-regular fa-search"}),inputAction:M,footerCaption:u,footerSlot:g,inputProps:{...I,id:A,value:V,disabled:k,placeholder:S,readOnly:T,required:B,onChange:N,onKeyDown:or,"aria-disabled":k||void 0,"aria-label":pr,"aria-labelledby":F,"aria-readonly":T||void 0,"aria-required":B||void 0}})});Bd.displayName="ArcSearch";const Df=Si,Of=zi,Ff=X(Er,["outline","solid","plain"]),Dd=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Yn=r=>Array.isArray(r.options),kt=r=>{const a=r?.variant;return a!=="divider"&&a!=="section-label"},Od=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Fd=r=>{},Nd=(r=[])=>r.flatMap(a=>Yn(a)?a.options:[a]).some(a=>kt(a)&&a.value===""),Hd=r=>{const a=o=>typeof o=="string"&&o.trim().length>0,e=o=>{if(typeof o!="object"||o===null)return;const{name:c}=o;return a(c)?c:void 0};return[r?.text,e(r?.avatar),r?.["aria-label"]].find(a)??"Anonymous"},$o=s`--arc•select`,fa=s`${$o}•picker`,Vd=s`${fa}•fg`,Ud=s`${fa}•bg`,Gi=s`${$o}•option`,yo=s`${Gi}•fg`,xo=s`${Gi}•bg`,Ze=s`${Gi}•icon`,Nf=s`
  ${Vd}: currentcolor;
  ${Ud}: var(--arc-color-bg-mono);
  ${$o}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${fa}•width: auto;
  ${fa}•min•width: 3em;
  ${fa}•border•radius: var(--arc-border-radius-lg);
  ${fa}•shadow: var(--arc-shadow-lg);

  ${yo}: currentcolor;
  ${xo}: transparent;

  ${Ze}•display: none;
  ${Ze}•color: var(${yo});
`,Hf=s`
  &[data-layout=fill] {
    ${fa}•width: 100%; /* fallback */
    ${fa}•width: anchor-size(inline);
  }
`,Vf=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Uf=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Wf=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Nf}
    ${Hf}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${fa}•display, none);
      flex-direction: column;
      gap: var(${z}•4);
      border: none;
      color: var(${Vd});
      width: var(--arc-select-picker-width, var(${fa}•width));
      min-width: var(--arc-select-picker-min-width, var(${fa}•min•width));
      margin: var(--arc-select-picker-margin, var(${z}•4) 0);
      padding: var(--arc-select-picker-padding, var(${z}•4));
      background: var(--arc-select-picker-background, var(${Ud}));
      border-radius: var(--arc-select-picker-border-radius, var(${fa}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${fa}•shadow));
    }

    ::picker(select):popover-open {
      ${fa}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${v}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${z}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${$o}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${v}•24);
      --arc-avatar-initial-font-size: var(${v}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${v}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${z}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${v}•1) solid var(--arc-color-border-mid);
      margin-top: var(${z}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${z}•8);
      width: 100%;
      min-width: 0;
      color: var(${yo});
      background: var(--arc-select-option-background, var(${xo}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${z}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${yo}: var(--arc-color-fg-disabled);
        ${xo}: transparent;
        ${Ze}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${xo}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${xo}: var(--arc-color-bg-selected-default);
        ${Ze}•display: flex;
        ${Ze}•color: var(--arc-select-option-selected-icon-color, var(${yo}));
      }

      [arc-select-icon=selected] {
        display: var(${Ze}•display, none);
        color: var(${Ze}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${$o}•placeholder•fg);
      }
    }
  }

  ${Vf}
  ${Uf}

}
`,Kf=(0,h.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",tag:t="span",items:o,placeholder:c,renderItem:i,headerLabel:l,headerSlot:d,footerCaption:u,footerSlot:g,id:f,value:p,defaultValue:m,required:b,disabled:$,readOnly:w,maxWidth:_,inputProps:y,...S},k)=>{const{name:T,onBlur:B,onChange:D,onFocus:F,onInput:I,"aria-describedby":A,"aria-label":q,"aria-labelledby":V,...Q}=S,Y=Rr(f,"arc-select"),or=e==="plain"&&r==="fill"?"hug":r,cr=$||void 0,pr=w||void 0,M=b||void 0,O=Dd(),N=e!=="plain"&&!!(l||d),L=e!=="plain"&&!!(u||g),rr=typeof c=="string"&&c.length>0&&!Nd(o),J=m??(rr?"":void 0),Z=p??J,ur=rr&&Z==="",R=O&&rr&&Z==="",tr=pr&&Z!=null?String(Z):void 0,fr=o.flatMap(W=>Yn(W)?W.options.filter(kt):kt(W)?[W]:(Fd(W),[])),xr=new Map(fr.map((W,Br)=>[W,Br])),Or=W=>{const{itemId:Br,...hr}=W,la=md(Nn(W));return(0,n.jsx)(la,{...hr})},sa=W=>{const Br=xr.get(W)??0,hr=W["aria-disabled"]===!0||W.disabled===!0,la=typeof W.itemId=="string"&&W.itemId.length>0?W.itemId:Br,da=String(W?.value??W?.itemId??Br);return(0,n.jsx)("option",{value:da,disabled:hr||tr!==void 0&&da!==tr||void 0,"arc-select-option":"",children:O?(0,n.jsxs)(n.Fragment,{children:[i?i(W,Br):Or(W),(0,n.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,n.jsx)(ir,{icon:"fa-regular fa-check arc-fw"})})]}):Hd(W)},la)},ne=(W,Br)=>{const hr=W.options.filter(kt);if(hr.length===0)return null;const la=W.options.find(Od);return(0,n.jsxs)("optgroup",{label:W.label,disabled:W.disabled||void 0,children:[O&&la&&(0,n.jsx)("legend",{"arc-select-option-group-legend":"",children:Or(la)}),hr.map(sa)]},W.itemId??`${W.label}-${Br}`)};return(0,n.jsxs)(t,{...Q,"arc-select":"","arc-input":"select","data-layout":or,"data-size":a,"data-variant":e,children:[N&&(0,n.jsxs)(zr.Header,{children:[(0,n.jsx)(zr.HeaderLabel,{htmlFor:Y,children:l}),!!d&&(0,n.jsx)(zr.Spacer,{}),(0,n.jsx)(zr.HeaderSlot,{children:d})]}),(0,n.jsx)(zr.InputBody,{children:(0,n.jsxs)("select",{...y,name:y?.name??T,onBlur:y?.onBlur??B,onChange:y?.onChange??D,onFocus:y?.onFocus??F,onInput:y?.onInput??I,"aria-describedby":y?.["aria-describedby"]??A,"aria-label":y?.["aria-label"]??q,"aria-labelledby":y?.["aria-labelledby"]??V,value:p,defaultValue:p==null?J:void 0,required:b,disabled:$,ref:k,id:Y,"aria-disabled":cr,"aria-required":M,"data-readonly":pr,"data-placeholder":ur||void 0,style:{..._?{"--js\u2022max\u2022width":_}:{},...y?.style},children:[(0,n.jsxs)("button",{"arc-select-button":"",children:[R&&(0,n.jsx)(Jr,{"arc-select-placeholder":"",text:c,overflow:"truncate"}),(0,n.jsx)("selectedcontent",{}),(0,n.jsx)("span",{"aria-hidden":!0,children:(0,n.jsx)(ir,{icon:"fa-regular fa-angle-down arc-fw"})})]}),rr&&(0,n.jsx)("option",{value:"",disabled:!0,hidden:!0,children:c}),o.map((W,Br)=>Yn(W)?ne(W,Br):kt(W)?sa(W):null)]})}),L&&(0,n.jsxs)(zr.Footer,{children:[(0,n.jsx)(zr.FooterCaption,{children:u}),!!g&&(0,n.jsx)(zr.Spacer,{}),(0,n.jsx)(zr.FooterSlot,{children:g})]})]})});sr("ArcSelect",Wf);const Gf=X(ea,["inherit","md","sm"]),Wr={On:"on",Off:"off"},wt={Before:"before",After:"after"},qf=({disabled:r,id:a,name:e,size:t="md",value:o,labelOff:c,labelOn:i,onChange:l,...d})=>{const u=Rr(e,"arc-switch-name"),g=Rr(a?`${a}-off`:void 0,"arc-switch-off"),f=Rr(a?`${a}-on`:void 0,"arc-switch-on"),p=y=>{if(y.code==="Space"){y.preventDefault(),y.stopPropagation();const S=o===Wr.On?Wr.Off:Wr.On;l?.({value:S},y)}},m=y=>{const S={on:Bt(i),off:Bt(c)};return S?.on&&S?.off?S[y]:!S?.on&&S?.off?`${S?.off}: ${y}`:S?.on&&!S?.off?`${S?.on}: ${y}`:S[y]},b=(0,n.jsxs)($n,{type:"switch",onKeyDown:p,children:[(0,n.jsx)(eo,{type:"switch",name:u,id:g,value:Wr.Off,checked:o===Wr.Off,disabled:r,"aria-label":m(Wr.Off)?.trim(),onChange:l}),(0,n.jsx)(eo,{type:"switch",name:u,id:f,value:Wr.On,checked:o===Wr.On,disabled:r,"aria-label":m(Wr.On)?.trim(),onChange:l}),(0,n.jsx)("span",{"data-element":"mask"})]}),$=!i&&o===Wr.Off?f:g,w=!c&&o===Wr.On?g:f,_=!!(i||c)&&(0,n.jsxs)(n.Fragment,{children:[!!c&&(0,n.jsx)(Ce,{htmlFor:$,"arc-switch-label":i?Wr.Off:"",children:(0,n.jsx)(Ue,{children:c})}),b,!!i&&(0,n.jsx)(Ce,{htmlFor:w,"arc-switch-label":c?Wr.On:"",children:(0,n.jsx)(Ue,{children:i})})]});return(0,n.jsx)("span",{...d,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:_||b})},Dr=s`--arc•switch`,yr=s`${Dr}•knob`,Yf=s`
@layer arc-components {

  [arc-switch] {
    ${Dr}•background: var(--arc-color-alpha-white-100);
    ${yr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${Dr}•background: var(--arc-color-alpha-white-70);
      ${yr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${j}•background: var(--arc-color-bg-neutral-subtle);
      ${j}•border•color: var(--arc-color-border-stark);
      ${yr}•border•color: var(--arc-color-border-on-stark);
      ${yr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${j}•border•color: var(--arc-color-border-heavy);
        ${yr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${j}•background: var(--arc-color-bg-disabled);
        ${j}•border•color: var(--arc-color-border-disabled);
        ${yr}•border•color: var(--arc-color-border-on-stark);
        ${yr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${j}•background: var(--arc-color-bg-theme-heavy);
      ${j}•border•color: var(--arc-color-border-theme-heavy);
      ${yr}•border•color: var(--arc-color-border-theme-heavy);
      ${yr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${j}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${j}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${Dr}•font•size: 1em;
      ${Dr}•width: 2.5em;
      ${Dr}•height: 1.5em;
      ${Dr}•gap: 0.5em;
      ${yr}•size: 1.5em;
      ${yr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${Dr}•font•size: var(${v}•14);
      ${Dr}•width: var(${v}•40);
      ${Dr}•height: var(${v}•24);
      ${Dr}•gap: var(${v}•8);
      ${yr}•x•shift: var(${v}•4);
      ${yr}•size: var(${v}•24);
    }

    &[data-size=sm] {
      ${Dr}•font•size: var(${v}•12);
      ${Dr}•width: var(${v}•30);
      ${Dr}•height: var(${v}•14);
      ${Dr}•gap: var(${v}•8);
      ${yr}•x•shift: var(${v}•1);
      ${yr}•size: var(${v}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${j}•border•radius: var(--arc-border-radius-pill);
    ${j}•width: var(${Dr}•width);
    ${j}•height: var(${Dr}•height);
    ${j}•x•shift: var(${yr}•x•shift);
    ${j}•size: var(${yr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${yr}•translate: calc(-100% + var(${yr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${yr}•translate: calc(0% - var(${yr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${Dr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${Dr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${j}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${yr}•translate);

      display: inline-flex;
      width: var(${yr}•size);
      height: var(${yr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${yr}•color);
      box-shadow: var(${yr}•shadow);
      border: var(${j}•border•width) solid var(${yr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Zf=({disabled:r,id:a,name:e,size:t="md",value:o,label:c,labelPosition:i=wt.After,onChange:l,labelOff:d,labelOn:u,...g})=>{const f=Rr(e,"arc-switch-name"),p=Rr(a,"arc-switch"),m=(w,_)=>{const y=w.checked?Wr.On:Wr.Off;l?.({...w,value:y},_)};!c&&(u||d)&&(c=u||d,i=u?wt.After:wt.Before);const b=(0,n.jsxs)($n,{type:"checkbox",children:[(0,n.jsx)(eo,{type:"checkbox",name:f,id:p,checked:o===Wr.On,disabled:r,role:"switch","aria-checked":o===Wr.On,"aria-label":c?void 0:"Toggle switch",tabIndex:0,onChange:m}),(0,n.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,n.jsx)(Ce,{htmlFor:p,"arc-switch-label":i,children:(0,n.jsx)(Ue,{children:c})});return d&&u?(0,n.jsx)(qf,{...g,disabled:r,id:a,name:e,labelOff:d,labelOn:u,size:t,value:o,onChange:l}):(0,n.jsxs)("span",{...g,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":i,role:"presentation","aria-live":"off",children:[c&&i===wt.Before&&$,b,c&&i===wt.After&&$]})};sr("ArcSwitch",Yf);const Xf=["title","heading","subheading","body"],Wd=["h1","h2","h3","h4","h5","h6"],Kd=["code","div","li","p","pre","span"],Gd=[...Wd,...Kd],Jf=[...ie],Qf=["title-inherit","title-lg","title-md","title-sm"],rm=["heading-inherit","heading-lg","heading-md","heading-sm"],am=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],em=X(Er,["inherit","primary","primary-inverse"]),tm=["body-inherit","body-lg","body-md","body-sm","body-xs"],om=Zr(Er,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),nm=X(Lo,["inherit","start","center","justify","end"]),cm=X(Po,["inherit","loose","standard","tight"]),im={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},sm=r=>{const{align:a,lineHeight:e,size:t,variant:o,scheme:c="auto",isMonospace:i,tag:l,...d}=r,u=im?.[l]??"body",g=t?.includes("inherit")?t?.split("-")?.[0]:t,f=o?.endsWith("-inverse");let p;return c!=="auto"?p=c:f&&(p=void 0),{...d,"arc-text":g||u,"arc-scheme":p,"data-is-monospace":i?"":void 0,"data-align":a?.includes("inherit")?void 0:a,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":e?.includes("inherit")?void 0:e}},be=s`--arc•text`,qi=s`${be}•font`,Ct=s`${be}•align`,ee=s`${be}fg`,qd=s`${be}•flex`,Yd=s`${be}•hyphens`,ko=s`${be}•letterspacing`,te=s`${be}•lineheight`,Zd=s`${be}•opacity`,Xd=s`${be}•whitespace`,Xe=s`${qi}•family`,Mr=s`${qi}•size`,At=s`${qi}•weight`,lm=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Ct}: unset;
  ${ee}: unset;
  ${qd}: unset;
  ${Yd}: auto;
  ${ko}: unset;
  ${te}: unset;
  ${Zd}: unset;
  ${Xd}: unset;

  ${Xe}: unset;
  ${Mr}: unset;
  ${At}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${te}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${te}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${te}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Ct}: start;
  }

  &[data-align=center] {
    ${Ct}: center;
  }

  &[data-align=justify] {
    ${Ct}: justify;
  }

  &[data-align=end] {
    ${Ct}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${ee}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${ee}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${ee}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${ee}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${ee}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${ee}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${ee}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${ee}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Xe}: var(--arc-font-family-title);
  ${At}: var(--arc-font-weight-title);
  ${ko}: var(--arc-letter-spacing-title);
  ${te}: var(--arc-line-height-title);

  ${Mr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Mr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${Mr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${Mr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Xe}: var(--arc-font-family-heading);
  ${At}: var(--arc-font-weight-heading);
  ${ko}: var(--arc-letter-spacing-heading);
  ${te}: var(--arc-line-height-heading);

  ${Mr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Mr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Mr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Mr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Xe}: var(--arc-font-family-subheading);
  ${At}: var(--arc-font-weight-subheading);
  ${ko}: unset;
  ${te}: var(--arc-line-height-subheading);

  ${Mr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Mr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Mr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Mr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Xe}: var(--arc-font-family-body);
  ${At}: var(--arc-font-weight-body);
  ${te}: var(--arc-line-height-body);
  ${Mr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Mr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${Mr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${Mr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${Mr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${Mr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Xe}: var(--arc-font-family-mono);
  ${te}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${qd}));
  hyphens: var(--arc-text-hyphens, var(${Yd})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${Zd}));
  text-align: var(--arc-text-align, var(${Ct}));
  white-space: var(--arc-text-white-space, var(${Xd}));

  color: var(--arc-text-color, var(${ee}));

  font-size: var(--arc-text-font-size, var(${Mr}));
  font-family: var(--arc-text-font-family, var(${Xe}));
  font-weight: var(--arc-text-font-weight, var(${At}));
  line-height: var(--arc-text-line-height, var(${te}));
  letter-spacing: var(--arc-text-letter-spacing, var(${ko}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,dm=r=>(0,h.forwardRef)((a,e)=>(0,h.createElement)(r,{...sm({...a,tag:r}),ref:e})),um=[...Gd].reduce((r,a)=>({...r,[a]:dm(a)}),{});sr("Arc",lm);const hm=X(Er,["common","ai","critical"]),Jd=[...ie],Qd=["default","success","warning","error"],ru=X(ea,["inherit","md"]),au=X(Er,["common"]),eu=[...je],gm=[...Qe],tu=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],vm=hm.filter(r=>r!=="critical"),ou={size:ru[1],variant:au[0],scheme:Jd[2],popover:eu[2],placement:tu[4],severity:Qd[0],showDismiss:!0},nu=(r,a="toggle")=>{const e=document.getElementById(r);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[a]()},cu=s`--arc•progress`,pm=s`${cu}•bar`,fm=s`${cu}•value`,iu=s`${pm}•bg`,wo=s`${fm}•bg`,mm=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${u0}

  [arc-progress-bar] {
    ${iu}: var(--arc-color-alpha-subtle);
    ${wo}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${wo}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${wo}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${v}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${iu}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${wo}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${wo}));
    }
  }

}
`,bm=({progress:r=0,variant:a="common",...e})=>(0,n.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":a,value:r,max:e.max||100,"aria-valuenow":r,"aria-valuemax":e.max||100,children:[r,"% "]});sr("ArcProgressBar",mm);const oe=s`--arc•toast`,Zn=s`${oe}•content`,su=s`${oe}•color`,lu=s`${oe}•background`,Co=s`${oe}•icon•color`,Ao=s`${oe}•transition`,$m=s`
@layer arc-components {

  [arc-toast] {
    ${Zn}•gap: var(${z}•2);
    ${Ao}•duration: 300ms;
    ${Co}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${oe}•font•size: var(${v}•16);
      ${Zn}•font•size: var(${v}•14);
    }

    &[data-size=inherit] {
      ${oe}•font•size: 1em;
      ${Zn}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${Co}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${Co}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${Co}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${lu}: var(--arc-color-bg-mono);
      ${su}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${z}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${oe}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${su}));
    background-color: var(--arc-toast-background, var(${lu}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${z}•12) var(${z}•12) var(${z}•12) var(${z}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${oe}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${oe}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${z}•8) var(${z}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${z}•8);
      padding: var(${z}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${Co}));

      height: 1lh;
      padding: 0 var(${z}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Zn}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${z}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${Ao}•duration) allow-discrete,
      overlay var(${Ao}•duration) allow-discrete,
      content-visibility var(${Ao}•duration) allow-discrete,
      opacity var(${Ao}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,du=({id:r,children:a,icon:e,heading:t,subtext:o,dismissProps:c,showDismiss:i=!0,onClose:l,actionSlot:d,size:u="md",variant:g="common",scheme:f=ou.scheme,placement:p="bottom-left",getToastId:m,progressBarProps:b,severity:$,...w})=>{const _=()=>{l?.()},y=f==="auto"?void 0:f,S=!!d||i,k=Rr(r,"arc-toast"),{variant:T,hierarchy:B,...D}=c||{};(0,h.useEffect)(()=>{m?.(k)},[m,k]);const F=$c(e);return(0,n.jsx)("div",{...w,"arc-toast":"","arc-scheme":y,"data-size":u,"data-variant":g,"data-placement":p,"data-severity":$||void 0,id:k,children:(0,n.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,n.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,n.jsx)(ir,{icon:F,"arc-toast-icon":""}),(0,n.jsx)("div",{"arc-toast-content":"",children:a||(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)("header",{"arc-toast-heading":"",children:(0,n.jsx)("strong",{children:t})}),o&&(0,n.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),S&&(0,n.jsxs)("div",{"arc-toast-actions":"",children:[d,i&&(0,n.jsx)(Cr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...D,popoverTarget:k,onClick:_})]}),b&&(0,n.jsx)(bm,{...b,variant:$==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};du.handleToast=nu,sr("ArcToast",$m);var So;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(So||(So={}));const ym=(r,a,e)=>{const[t,o]=(0,h.useState)(a),[c,i]=Sf(r,a),[l,d]=Ui(r,a);return e===So.Temporary?[c,i]:e===So.Persistent?[l,d]:[t,o]},xm=["auto","hex","hexa","rgb","hsl","oklch"],km=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
