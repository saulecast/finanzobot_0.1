/*! For license information please see common-transaction-avatar-view.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["common-transaction-avatar-view"],{"./src/client/less_2.0/common/transaction-avatar.module.less":(e,a,t)=>{"use strict";t.d(a,{Z:()=>o});const o={transactionAvatarContainer:"nzgL-",directDeposit:"pvcdt",savingBubble:"l5ZCn",acornsBubble:"noPsy",logoPaypalBubble:"_4oDym",autoTopupBubble:"xtZ75",moneyPoolsBubble:"T4ltw",transferBubble:"ROpgZ",cashCheckBubble:"eaKyn",merchantBubble:"pMbTc",xoomBubbleIcon:"_3MKfM"}},"./src/client/components_2.0/common/transaction-avatar.view.tsx":(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var o=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=(t("./node_modules/core-js/modules/es.regexp.flags.js"),t("./node_modules/@paypalcorp/pp-react-progress-meter/dist/@paypalcorp/pp-react-progress-meter.esm.js")),s=t("./node_modules/@paypalcorp/pp-react-badge/dist/@paypalcorp/pp-react-badge.esm.js"),r=t("./node_modules/react/index.js"),l=t("./src/client/utils/app-context.ts"),i=t("./node_modules/@paypalcorp/pp-react-avatar/dist/@paypalcorp/pp-react-avatar.esm.js"),c=t("./node_modules/@paypalcorp/pp-react-icons/dist/@paypalcorp/pp-react-icons.esm.js"),p=t("./node_modules/classnames/index.js"),u=t.n(p),d=t("./src/client/utils/components/common/transaction-avatar.ts"),m=t("./src/client/less_2.0/common/transaction-avatar.module.less"),y=t("./node_modules/commonweb-utils/index.js"),g=function(e){var a,t=e.bubbleBackgroundColor,p=e.isBusiness,g=e.flags,b=e.cryptoUrl,v=e.photoUrl,f=e.merchantLogoUrl,h=e.counterpartyBizName,_=e.nameInitials,B=e.isList,P=e.xoomRefundUrl,Z=e.isThreadActivity,A=e.progressValue,C=e.isAllCreditDataUpdate,U=e.isChildTransaction,x=e.status,L=e.partnerName,j=(0,d.u)({flags:g,cryptoUrl:b,photoUrl:v,merchantLogoUrl:f,counterpartyBizName:h,nameInitials:_,xoomRefundUrl:P,isThreadActivity:U||Z,partnerName:L}),G=j.type,N=j.value,E=null!=g&&g.isXoomRefund||null!=g&&g.isCounterpartyPayPal?m.Z.xoomBubbleIcon:m.Z.merchantBubble,X=y.QX.safeGet(g,"isOnHold"),k=(0,r.useContext)(l.Z).fpti;(0,r.useEffect)((function(){var e={logo:!!f,total_count:p?1:0};if(!B){var a={pageGroup:"tdPage",event_name:"tdpage_count",module:"tdPage",merchantLogos:!!f,total_count:p?1:0};window.PAYPAL.fpti.triggerFPTIImpression("merchantLogos",null,e),k.triggerFPTIImpression(a)}}),[]);var T=(0,r.useCallback)((function(){return X?r.createElement(s.OnHoldBadge,{"data-testid":"hold-avatar-badge",label:"OnHold"}):"PENDING"===x?r.createElement(s.InProgressBadge,{"data-testid":"pending-avatar-badge",label:"Pending"}):null}),[]);return r.createElement("div",{className:"transaction-avatar-container ".concat(m.Z.transactionAvatarContainer)},"url"===G&&r.createElement(r.Fragment,null,Z&&C&&A?r.createElement(n.NH,{value:A,color:"green",imageSrc:N,size:"sm"}):r.createElement(i.q,{src:N,alt:"user",loading:"lazy",size:"sm",className:E,badge:T()})),"icon"===G&&r.createElement(r.Fragment,null,Z&&C&&A?r.createElement(n.yk,{value:A,color:"green",size:"sm",iconComponent:c.V2BankIcon}):r.createElement(i.q,{"data-cy":"transactionAvatar",icon:N,alt:"user",size:"sm",className:u()((a={},(0,o.Z)(a,m.Z.directDeposit,"direct-deposit"===N),(0,o.Z)(a,m.Z.savingBubble,"goals"===N),(0,o.Z)(a,m.Z.acornsBubble,"acorns"===N),(0,o.Z)(a,m.Z.logoPaypalBubble,"logo-paypal"===N),(0,o.Z)(a,m.Z.autoTopupBubble,"auto-top-up"===N),(0,o.Z)(a,m.Z.moneyPoolsBubble,"money-pools"===N),(0,o.Z)(a,m.Z.transferBubble,"transfer"===N),(0,o.Z)(a,m.Z.cashCheckBubble,"cash-check"===N),a)),style:{backgroundColor:t},badge:T()})),"url"!==G&&"icon"!==G&&r.createElement(i.q,{initials:N,alt:"user","aria-hidden":!0,size:"sm",style:{backgroundColor:t},badge:T()}))};g.defaultProps={flags:{},cryptoUrl:"",photoUrl:"",merchantLogoUrl:"",counterpartyBizName:"",bubbleBackgroundColor:"",nameInitials:"",isBusiness:!1,isList:!1,xoomRefundUrl:"",isThreadActivity:!1,progressValue:0,isAllCreditDataUpdate:!1,isChildTransaction:!1,status:"",partnerName:"XOOM"};const b=r.memo(g)},"./src/client/utils/components/common/transaction-avatar.ts":(e,a,t)=>{"use strict";t.d(a,{u:()=>n});t("./node_modules/core-js/modules/es.regexp.flags.js");var o=t("./node_modules/commonweb-utils/index.js"),n=function(e){var a=e.flags,t=e.cryptoUrl,n=e.photoUrl,s=e.merchantLogoUrl,r=e.counterpartyBizName,l=e.nameInitials,i=e.xoomRefundUrl,c=e.isThreadActivity,p=e.partnerName,u=o.QX.safeGet(a,"isCounterpartyPayPal"),d=o.QX.safeGet(a,"isAutoTopUp"),m=o.QX.safeGet(a,"isMoneyPools"),y=o.QX.safeGet(a,"isAcorns"),g=o.QX.safeGet(a,"isTransfer"),b=o.QX.safeGet(a,"isCheckCapture"),v=o.QX.safeGet(a,"isDirectDeposit"),f=o.QX.safeGet(a,"isSavingsTransfer"),h=o.QX.safeGet(a,"isXoomRefund"),_=o.QX.safeGet(a,"isGplRepayment"),B=o.QX.safeGet(a,"isGplPurchase"),P=o.QX.safeGet(a,"isGplRepaymentRefund"),Z={"logo-paypal":{condition:u,type:"icon",value:"logo-paypal"},"logo-mark-paypal":{condition:h&&"PAYPAL"===p,type:"url",value:"https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"},"auto-top-up":{condition:d,type:"icon",value:"auto-top-up"},"money-pools":{condition:m,type:"icon",value:"money-pools"},acorns:{condition:y,type:"icon",value:"acorns"},"cryptoLogo-transfer":{condition:g&&t,type:"url",value:t},"xoom-refund":{condition:h&&i,type:"url",value:i},transfer:{condition:g,type:"icon",value:"transfer"},"cash-check":{condition:b,type:"icon",value:"cash-check"},"direct-deposit":{condition:v,type:"icon",value:"direct-deposit"},"savings-bubble":{condition:f,type:"icon",value:"goals"},cryptoLogo:{condition:t,value:t,type:"url"},photoUrl:{condition:n,value:n,type:"url"},merchantLogoUrl:{condition:s,value:s,type:"url"},repaymentCash:{condition:_&&!B&&!P&&c,value:"cash",type:"icon"},counterpartyBizName:{condition:r&&!l,value:"store",type:"icon"},nameInitials:{condition:l,value:l,type:"initial"}};for(var A in Z)if(Z[A].condition)return delete Z[A].condition,Z[A];return{type:"icon",value:"user"}}},"./node_modules/classnames/index.js":(e,a)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var r=n.apply(null,t);r&&e.push(r)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var l in t)o.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(a,[]))||(e.exports=t)}()}}]);