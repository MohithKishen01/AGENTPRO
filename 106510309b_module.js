﻿/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Performance By Bookie - Bookie Performance</font></H5>
*/

/**
	This class extends the PEModule and initialise the moduleid, versionid.
*/
function BookiePerformModule_106510309b ()
{
	this.inheritFrom = PEModule;
	this.inheritFrom ();
	
	/* p106trading - mssqlv51 - p10651soccer - Performance By Bookie - Bookie Performance */
	this.ModuleId   = 106510309;
    this.VersionId  = 1.01;
}

/**
    Initializes objects namely PEProject, PEDocument, PEComponent, PEValidation & PEMessages.
*/
function Constructor_106510309b ()
{
	UDModule	= new BookiePerformModule_106510309b();
	
	UDModule.PROJ	= new PEProject ();
	UDModule.DOM    = new PEDocument ();
    UDModule.COMP   = new PEComponent ();
    UDModule.TBL	= new PETable ();    
    UDModule.VAL	= new PEValidation ();
    UDModule.MSG    = new PEMessages ();
	UDModule.SPORT  = new PESport ();
    UDModule.MATH	= new PEMath ();
    UDModule.DATE	= new PEDate ();

    UDModule.PROJEX	= new Trading_10651 ();
}