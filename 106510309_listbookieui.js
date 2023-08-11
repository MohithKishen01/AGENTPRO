/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie</font></H5>    
*/

var m_arrNodes_BO = new Array ();
var m_arrSelectedIds_BO = new Array ();

function buildCommonListUI_BO_106510309 ()
{   
	UDModule.COMP.setDisplay ("trPerformanceList", "none");
	UDModule.COMP.setDisplay ("trBookieList", "block");

	if (m_arrNodes_BO.length > 0)
	{
		var objCommon = new CommonListObj_BB ();
		objCommon.ArrNodes		= m_arrNodes_BO;
		objCommon.SelectedIds	= m_arrSelectedIds_BO.join ("_");
	    
		objCommon.HeaderLeft	= m_arrHeaders_CL [iH_CommonName_BO];
		objCommon.ColumnCount	= kColumnCount_BO;
		objCommon.ColumnWidth	= 200;
		objCommon.kE_ChkElement = kE_ChkElement_BO;	
		
		objCommon.kEM_NameClicked		    = "lblClicked_BO_106510309";
		objCommon.kEM_SelectAllClicked	    = "lblSelectAllClicked_BO_106510309 ()";
		objCommon.kEM_ClearAllClicked	    = "lblClearAllClicked_BO_106510309 ()";
		objCommon.kEM_CloseClicked		    = "closeClicked_BO_106510309 ()";
		objCommon.kEM_SetSelectionClicked	= "setSelectionClicked_BO_106510309 ()";
		
		UDModule.COMP.replaceDynamicHtml ("tdBookieList", objCommon.buildCommonListUI (objCommon));
	}
	else
		UDModule.COMP.replaceDynamicHtml ("tdBookieList", UDModule.TBL.getNoDataPresentEx (987, 100, 1, ""));
}

function storeSelectedIds_BO_106510309 ()
{
	m_arrSelectedIds_BO = new Array ();
	
    for (var nIndex = 0; nIndex < m_arrNodes_BO.length; nIndex++)
	{
		var arrInfo = m_arrNodes_BO [nIndex];
		var nBookieId =  arrInfo [iCommonId_BO];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_BO + nBookieId);
		if (oElement != null && oElement.checked)
			m_arrSelectedIds_BO [m_arrSelectedIds_BO.length] = nBookieId;
	}
}

function getSelectedIds_BO_106510309 ()
{
    return m_arrSelectedIds_BO;
}

function setCommonList_BO_106510309 (arrNodes)
{
	m_arrNodes_BO = arrNodes;
}

function lblShowClicked_BO_106510309 ()
{
	if (isValidDate_106510309 ())
	{
		UDModule.COMP.setDisplay ("tdShowBookies", "none");
		UDModule.COMP.setDisplay ("tdHideBookies", "block");

		toggleView_BT_106510309 ();
		toggleView_LL_106510309 ();	

		showBookieClicked_BO_106510309 ();
		buildCommonListUI_BO_106510309 ();
	}
}

function showBookieClicked_BO_106510309 ()
{
	var xmlDoc = UDModule.PROJ.processRequest (getBookieListParam_106510309 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))    
	{
		if (isValidStatus_T6_106510309 (xmlDoc))
		{                   			                 	        
			var nodeList_BO = xmlDoc.getElementsByTagName (kSR_Bookies);
			var arrNodes_BO = UDModule.DOM.convertNodesToArray (nodeList_BO);
			setCommonList_BO_106510309 (arrNodes_BO);
		}
	}
}

function lblHideClicked_BO_106510309 ()
{
	UDModule.COMP.setDisplay ("trPerformanceList", "block");
    toggleView_BO_106510309 ();
}

function lblClicked_BO_106510309 (nLeagueId)
{
    var oElement = UDModule.COMP.getElement (kE_ChkElement_BO + nLeagueId);	
	if (oElement != null)	
		oElement.checked = !oElement.checked;
}

function lblSelectAllClicked_BO_106510309 ()
{
    for (var nIndex = 0; nIndex < m_arrNodes_BO.length; nIndex++)
	{
		var arrInfo = m_arrNodes_BO [nIndex];
		var nBookieId =  arrInfo [iCommonId_BO];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_BO + nBookieId);
		if (oElement != null)
			oElement.checked = true;
	}		
}

function lblClearAllClicked_BO_106510309 ()
{
    for (var nIndex = 0; nIndex < m_arrNodes_BO.length; nIndex++)
	{
		var arrInfo = m_arrNodes_BO [nIndex];
		var nBookieId =  arrInfo [iCommonId_BO];	

		var oElement = UDModule.COMP.getElement (kE_ChkElement_BO + nBookieId);
		if (oElement != null)
			oElement.checked = false;
	}		
}

function closeClicked_BO_106510309 ()
{    
	UDModule.COMP.setDisplay ("trPerformanceList", "block");

    UDModule.COMP.setDisplay ("tdHideBookies", "none");
	UDModule.COMP.setDisplay ("tdShowBookies", "block");	
	
	UDModule.COMP.replaceDynamicHtml ("tdBookieList", "");
}

function setSelectionClicked_BO_106510309 ()
{	
    storeSelectedIds_BO_106510309 ();
    toggleView_BO_106510309 ();
}

function clearValues_BO_106510309 ()
{
	m_arrSelectedIds_BO = new Array ();
    toggleView_BO_106510309 ();
}

function toggleView_BO_106510309 ()
{
    UDModule.COMP.setDisplay ("tdShowBookies", "block");
	UDModule.COMP.setDisplay ("tdHideBookies", "none");
	UDModule.COMP.setDisplay ("trBookieList", "none");
}