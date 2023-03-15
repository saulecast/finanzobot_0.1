/*! For license information please see common-transaction-amount-view.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["common-transaction-amount-view"],{"./src/client/less_2.0/widget/widget-transactions-container.module.less":(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const s={widgetTransactionsContainer:"lTVEo",transactionList:"-zLtK",transactionListHoverGenericTile:"_2g1OT",transactionListHomeTile:"jlw0z",alignAvatar:"ln2kg",transactionListDW:"FOOYO",transactionSection:"Oob-+",sectionWrap:"rp4GX",topRow:"bmQ1u",totalAmountText:"deCTd",notesText:"_1lC9R",divider:"AX8DT"}},"./src/client/components_2.0/common/transaction-amount.view.tsx":(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>w});var s=a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=(a("./node_modules/core-js/modules/es.regexp.flags.js"),a("./node_modules/core-js/modules/es.array.concat.js"),a("./node_modules/@paypalcorp/pp-react-text/dist/@paypalcorp/pp-react-text.esm.js")),o=a("./node_modules/react/index.js"),r=a("./node_modules/@paypalcorp/pp-react-colors/dist/@paypalcorp/pp-react-colors.esm.js"),i=a("./src/client/utils/app-context.ts"),l=a("./node_modules/@paypalcorp/worldready-react/browser.js"),c=a("./node_modules/classnames/index.js"),d=a.n(c),u=a("./src/client/less_2.0/common.module.less");const m="T7oEc",p="awKTm",y="uEuAu",f="E6MdB",A="qElPh",v="DBvUZ",_="_8Zl9T",g="xZDh7";var C=a("./node_modules/commonweb-utils/index.js"),E=a("./src/client/less_2.0/widget/widget-transactions-container.module.less"),x=function(t){var e,a=t.amount,c=t.isCredit,x=t.flags,w=t.isNeutralAmount,N=t.isZeroNetAmount,T=t.type,O=t.txnCurrency,R=t.isActivityWidget,G=t.widgetData,h=t.isList,j=t.activityFlow,X=C.QX.safeGet(x,"isCurrencyConversion"),D=C.QX.safeGet(x,"wasCanceledOrDenied"),L=C.QX.safeGet(x,"isCryptoReward"),Q=C.QX.safeGet(x,"isCryptoRewardReversal"),Z=C.QX.safeGet(x,"isGplPurchase"),S=C.QX.safeGet(x,"isGplPurchaseRefund"),b=C.QX.safeGet(x,"isSavingToSaving"),V=C.QX.safeGet(x,"isFwcDeferedTxn"),U=C.QX.safeGet(a,"netAmount"),P=C.QX.safeGet(a,"rewardAmount"),F=C.QX.safeGet(a,"loanAmount"),I=C.QX.safeGet(a,"loanPaidAmount"),B=C.QX.safeGet(a,"netAmountWithoutEstFee"),W=(0,o.useContext)(i.Z),Y=W.isCardLayoutEnabled,H=W.isStackViewEnabled,K=I&&H?I:B||U,k=c?r.green700:r.grey700;return o.createElement("div",{className:"transaction-amount-container ".concat(m)},o.createElement(n.BodyText,{strong:!0,"data-cy":"transactionAmount",style:{color:w?r.grey600:k},className:d()((e={},(0,s.Z)(e,A,!0),(0,s.Z)(e,f,h),(0,s.Z)(e,E.Z.totalAmountText,R&&!G.isActivityTile),(0,s.Z)(e,p,D),(0,s.Z)(e,u.Z.positionUnset,Y),e)),"data-testid":"totalAmountText"},(X||"CURRENCY_CONVERSION"===T)&&o.createElement("span",{"data-cy":"totalAmountTextVal",className:v}),o.createElement("span",{className:"".concat(_," ").concat(X||"CURRENCY_CONVERSION"===T?g:""),"data-cy":"totalAmountTextVal"},!X&&"CURRENCY_CONVERSION"!==T&&!w&&!Z&&!S&&!b&&!V&&!N&&o.createElement(o.Fragment,null,c?"+ ":"- "),!L||Q||"CURRENCY_CONVERSION"===T||X?K:P),O&&o.createElement("span",{className:y,"data-cy":"totalAmountTextVal"},O)),F&&H&&!R&&"rescenter"!==j&&o.createElement(n.CaptionText,{"data-cy":"loanAmount"},o.createElement(l.v0,{installmentsAmount:F,id:h?"activity.activity.threadedActivity.totalInstallmentsAmount":"transaction-details.overview.threadedActivity.totalInstallmentsAmount"})))};x.defaultProps={amount:{},isCredit:!1,flags:{},isNeutralAmount:!1,isZeroNetAmount:!1,type:"",txnCurrency:"",isActivityWidget:!1,widgetData:{},isList:!1,activityFlow:""};const w=o.memo(x)},"./node_modules/classnames/index.js":(t,e)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&t.push(r)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)s.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(a=function(){return n}.apply(e,[]))||(t.exports=a)}()}}]);