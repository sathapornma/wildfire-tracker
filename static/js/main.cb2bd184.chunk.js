(this["webpackJsonpwildfire-tracker"]=this["webpackJsonpwildfire-tracker"]||[]).push([[0],{211:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(0),o=a.n(n),s=a(9),r=a.n(s),c=(a(211),a(199)),l=a(69),j=a(57),d=a(198),p=a(465),h=a(7),m=a(466),g=a(468),b=a(419),O=a(71),u=a(464),x=a(200),f=a(68),v=a(6),M=a(459),y=a(467),k=a(455),w=a(456),S=a(458),A=a(457),_=a(28),E=a.n(_),I=[{id:"Global Fire Map",children:[{id:"Canada",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/canada"},{id:"Alaska",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/alaska"},{id:"USA (Conterminous) and Hawaii",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/usa-hawaii"},{id:"Central America",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/central-america"},{id:"Europe",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/europe"},{id:"North and Central Africa",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/north-and-central-africa"},{id:"Southern Africa",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/southern-africa"},{id:"Russia and Asia",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/russia-and-asia"},{id:"South Asia",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/south-asia"},{id:"South East Asia",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/south-east-asia"},{id:"Australia and New Zealand",icon:Object(i.jsx)(E.a,{}),active:!1,path:"/australia-and-new-zealand"}]},{id:"About",children:[{id:"Theam",icon:""},{id:"Handbook",icon:""}]}];var C=Object(h.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#ff4d4d"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)},navLink:{textDecoration:"none"}}}))((function(e){var t=e.classes,a=Object(x.a)(e,["classes"]);return Object(i.jsx)(y.a,Object(j.a)(Object(j.a)({variant:"permanent"},a),{},{children:Object(i.jsx)(k.a,{disablePadding:!0,children:I.map((function(e){var a=e.id,n=e.children;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(w.a,{className:t.categoryHeader,children:Object(i.jsx)(A.a,{classes:{primary:t.categoryHeaderPrimary},children:a})}),n.map((function(e){var a=e.id,n=e.icon,o=e.active,s=e.path;return Object(i.jsx)(f.b,{className:t.navLink,to:s,children:Object(i.jsxs)(w.a,{button:!0,className:Object(v.a)(t.item,o&&t.itemActiveItem),children:[Object(i.jsx)(S.a,{className:t.itemIcon,children:n}),Object(i.jsx)(A.a,{classes:{primary:t.itemPrimary},children:a})]},a)},a)})),Object(i.jsx)(M.a,{className:t.divider})]},a)}))})}))})),L=a(460),P=a(462),B=a(463),H=a(195),T=a.n(H),R=a(461),Z="rgba(255, 255, 255, 0.7)";var G=Object(h.a)((function(e){return{secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Z,"&:hover":{color:e.palette.common.white}},button:{borderColor:Z},textHeader:{marginLeft:10}}}))((function(e){var t=e.classes,a=e.onDrawerToggle;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(L.a,{component:"div",color:"primary",position:"static",elevation:0,children:Object(i.jsx)(R.a,{children:Object(i.jsxs)(P.a,{children:[Object(i.jsx)(g.a,{smUp:!0,children:Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(B.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton,children:Object(i.jsx)(T.a,{})})})}),Object(i.jsx)(O.a,{align:"center",variant:"h6",className:t.textHeader,children:"WILDFIRE TRACKER"})]})})})})})),D=a(12),X=a(5),z=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),N={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Canada_24h.kml",lat:45.429,lng:-94.02}}},U=function(e){e.loc;return Object(i.jsx)(z,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:N.loc.pin})},J=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),K={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Alaska_24h.kml",lat:45.429,lng:-94.02}}},Q=function(e){e.loc;return Object(i.jsx)(J,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:K.loc.pin})},V=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),F={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_USA_contiguous_and_Hawaii_24h.kml",lat:45.429,lng:-94.02}}},W=function(e){e.loc;return Object(i.jsx)(V,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:F.loc.pin})},Y=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),q={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Central_America_24h.kml",lat:45.429,lng:-94.02}}},$=function(e){e.loc;return Object(i.jsx)(Y,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:q.loc.pin})},ee=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),te={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Europe_24h.kml",lat:45.429,lng:-94.02}}},ae=function(e){e.loc;return Object(i.jsx)(ee,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:te.loc.pin})},ie=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),ne={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Northern_and_Central_Africa_24h.kml",lat:45.429,lng:-94.02}}},oe=function(e){e.loc;return Object(i.jsx)(ie,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:ne.loc.pin})},se=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),re={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Southern_Africa_24h.kml",lat:45.429,lng:-94.02}}},ce=function(e){e.loc;return Object(i.jsx)(se,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:re.loc.pin})},le=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),je={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Russia_Asia_24h.kml",lat:45.429,lng:-94.02}}},de=function(e){e.loc;return Object(i.jsx)(le,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:je.loc.pin})},pe=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),he={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_South_Asia_24h.kml",lat:45.429,lng:-94.02}}},me=function(e){e.loc;return Object(i.jsx)(pe,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:he.loc.pin})},ge=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),be={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_SouthEast_Asia_24h.kml",lat:45.429,lng:-94.02}}},Oe=function(e){e.loc;return Object(i.jsx)(ge,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:be.loc.pin})},ue=Object(X.withScriptjs)(Object(X.withGoogleMap)((function(e){return Object(i.jsxs)(X.GoogleMap,{defaultZoom:8,defaultCenter:{lat:e.data.lat,lng:e.data.lng},children:[Object(i.jsx)(X.KmlLayer,{url:e.data.file,options:{preserveViewport:!1}}),e.isMarkerShown&&Object(i.jsx)(X.Marker,{})]})}))),xe={loc:{pin:{file:"https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6/kml/MODIS_C6_Australia_NewZealand_24h.kml",lat:45.429,lng:-94.02}}},fe=function(e){e.loc;return Object(i.jsx)(ue,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBMLe5XT2ZEIAJ0mHe6AXeP0Mg-PBHPQto",loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}}),data:xe.loc.pin})};function ve(){return Object(i.jsxs)(O.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(i.jsx)(u.a,{color:"inherit",href:"https://cpe.rmuti.ac.th/",children:"RMUTI Computer Engineering"})," ",(new Date).getFullYear(),"."]})}var Me=Object(d.a)({palette:{primary:{light:"#63ccff",main:"#ff0000",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48,padding:5}}});Me=Object(j.a)(Object(j.a)({},Me),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:Me.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:Me.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:10,minWidth:0,padding:0},Me.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:Me.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:Me.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}},paper:{marginTop:10,marginRight:10,overflow:"hidden"}}});var ye={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},Me.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:Me.spacing(2,4),background:"#eaeff1"},footer:{padding:Me.spacing(2),background:"#eaeff1"}};var ke=Object(h.a)(ye)((function(e){var t=e.classes,a=o.a.useState(!1),n=Object(c.a)(a,2),s=n[0],r=n[1],l=function(){r(!s)};return Object(i.jsx)(p.a,{theme:Me,children:Object(i.jsxs)("div",{className:t.root,children:[Object(i.jsx)(m.a,{}),Object(i.jsxs)("nav",{className:t.drawer,children:[Object(i.jsx)(g.a,{smUp:!0,implementation:"js",children:Object(i.jsx)(C,{PaperProps:{style:{width:256}},variant:"temporary",open:s,onClose:l})}),Object(i.jsx)(g.a,{xsDown:!0,implementation:"css",children:Object(i.jsx)(C,{PaperProps:{style:{width:256}}})})]}),Object(i.jsxs)("div",{className:t.app,children:[Object(i.jsx)(G,{onDrawerToggle:l}),Object(i.jsx)("main",{className:t.main,children:Object(i.jsx)(b.a,{className:t.paper,children:Object(i.jsxs)(D.d,{children:[Object(i.jsx)(D.b,{exact:!0,path:"/wildfire-tracker",children:Object(i.jsx)(D.a,{to:"/south-east-asia"})}),Object(i.jsx)(D.b,{exact:!0,path:"/canada",component:U}),Object(i.jsx)(D.b,{exact:!0,path:"/alaska",component:Q}),Object(i.jsx)(D.b,{exact:!0,path:"/usa-hawaii",component:W}),Object(i.jsx)(D.b,{exact:!0,path:"/central-america",component:$}),Object(i.jsx)(D.b,{exact:!0,path:"/europe",component:ae}),Object(i.jsx)(D.b,{exact:!0,path:"/north-and-central-africa",component:oe}),Object(i.jsx)(D.b,{exact:!0,path:"/southern-africa",component:ce}),Object(i.jsx)(D.b,{exact:!0,path:"/russia-and-asia",component:de}),Object(i.jsx)(D.b,{exact:!0,path:"/south-asia",component:me}),Object(i.jsx)(D.b,{exact:!0,path:"/south-east-asia",component:Oe}),Object(i.jsx)(D.b,{exact:!0,path:"/australia-and-new-zealand",component:fe})]})})}),Object(i.jsx)("footer",{className:t.footer,children:Object(i.jsx)(ve,{})})]})]})})})),we=function(){return Object(i.jsx)(f.a,{children:Object(i.jsx)(ke,{})})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,469)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),o(e),s(e)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(we,{})}),document.getElementById("root")),Se()}},[[417,1,2]]]);
//# sourceMappingURL=main.cb2bd184.chunk.js.map