/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie</font></H5>
*/

var m_bIsFilter = false;

/**
	Sets the filter position
*/
function setFilterPosition_106510309 ()
{
	UDModule.COMP.getElement ("divFilters").style.left = UDModule.COMP.findPosX (UDModule.COMP.getElement ("tblMain")) + 640;
}

/**
	On click displays the filter.
	
	@see #showFilters_106510309	
*/
function moreFiltersClicked_106510309 ()
{
	var bIsVisible = (UDModule.COMP.getElement ("divFilters").style.display == "block");
	showFilters_106510309 (!bIsVisible);	
}

/**
	Displays the filter.
	
	@see #initFilters_106510309	
*/
function showFilters_106510309 (bShow)
{	
	var oShowVisible = "visible", oDisplayFilter = "none";	
	var oLink = m_arrLinks [0];
	var oTitle = m_arrLinks [2];
	
	if (bShow)
	{
		UDModule.COMP.setDisplay ("btnShow", "none");
		m_bIsFilter = true;
		
		var oElement = UDModule.COMP.getElement ("cbLiveStatus");
		oShowVisible = "hidden", oDisplayFilter = "block";		
		oLink = m_arrLinks [1];
		oTitle = m_arrLinks [3];
	}
	else
	{
		initFilters_106510309 ();
		UDModule.COMP.setDisplay ("btnShow", "block");
	}
	UDModule.COMP.setDisplay ("divFilters", oDisplayFilter);
	UDModule.COMP.replaceDynamicHtml ("fntLinks", oLink);
	UDModule.COMP.getElement ("fntLinks").title = oTitle;
	
	UDModule.COMP.setFocus (oElement);
}

/**
	Closes the filter
	
	@see #showFilters_106510309	
*/
function closeFiltersClicked_106510309 ()
{	
	m_bIsFilter = false;
	showFilters_106510309 (false);
}

/**
	Checks for filter	
*/
function isFilter_106510309 ()
{
	return m_bIsFilter;
}