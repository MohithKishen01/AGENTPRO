<table class="table_bg" width="1050" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td colspan="2">
            <table id="tblMain" class="fieldtitle" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr height="22">
                    <td class="title_module" width="1000">
                        &nbsp;Soccer<font class="module_sep">&nbsp;&raquo;&nbsp;</font>Performance By Bookie
                    </td>
                    <td class="help_module" width="50" align="center">
                        <font class="cursor" title="Click here to view help..." onclick="UDModule.PROJ.helpClicked ()">Help</font>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="border_left_bottom_right">
            <table class="fieldtitle" align="right" cellpadding="0" cellspacing="0" border="0">
                <tr height="26">
					<td>
					<font class="drawbets">*&nbsp;Draw Bet(s) stake not</font>
					</td>
					<td width="20">
					</td>
					<td width="100">
						Company Unit
					</td>
					<td width="10">
					</td>
                    <td>
                        Report By
                    </td>
                    <td width="10">
                    </td>
                    <td>
                        Win/Lose
                    </td>
                    <td width="10">
                    </td>                   
					<td>
						From Date
					</td>
					<td width="10">
					</td>
					<td>
						To Date
					</td>
					<td width="10">
					</td>
					<td>
						<table class="fieldtitle" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td id="tdShowBetTypes" width="100">
									<font class="boldlink" onclick="lblShowClicked_BT_106510309 ()" title="Click here to show BetTypes">Show Bet Types</font>
								</td>
								<td id="tdHideBetTypes" width="100" style="display:none;">
									<font class="more_filters" onclick="lblHideClicked_BT_106510309 ()" title="Click here to Hide BetTypes">Hide Bet Types</font>
								</td>
								<td width="5">
								</td>
								<td id="tdShowLeagues" width="100" colspan="3">
									<font class="boldlink" onclick="lblShowClicked_LL_106510309 ()" title="Click here to show Leagues">Show Leagues</font>
								</td>
								<td id="tdHideLeagues" width="100" style="display:none;" colspan="3">
									<font class="more_filters" onclick="lblHideClicked_LL_106510309 ()" title="Click here to Hide Leagues">Hide Leagues</font>
								</td>
								<td width="10">
								</td>
								<td width="70" nowrap="">
									<font id="fntLinks" class="more_filters" title="Click to view more Filters..." onclick="moreFiltersClicked_106510309 ()">
										More Filters
									</font>
								</td>
							</tr>
						</table>
					</td>
					<td width="5">
					</td>
				</tr>
				<tr height="26">
					<td>
						&nbsp;<font class="drawbets">&nbsp;included in Turnover</font>
					</td>
					<td>
					</td>
					<td>
						<select id="cbCompanyUnits" class="dropdown" onchange="companyUnitChanged_106510309 ()" onkeyup="UDModule.COMP.changeFocus_CV (event, 'cbReportBy')">
							<option value="0">[Choose One]</option>
						</select>&nbsp;
					</td>
					<td>
					</td>
					<td>
						<select class="dropdown" id="cbReportBy" onchange="reportByChanged_106510309 ()" onkeyup="UDModule.COMP.changeFocus_CV (event, 'cbWinLoseType')">
							<option value="1">Bookie</option>
							<option value="2">Accounts</option>
							<option value="3">League</option>
						</select>
					</td>
					<td>
					</td>
					<td>
						<select class="dropdown" id="cbWinLoseType" onkeyup="UDModule.COMP.changeFocus_CV (event, 'txtFromDate')">
							<option value="0">All Bets</option>
							<option value="1">Win Bets</option>
							<option value="2">Lose Bets</option>
							<option value="3">Draw Bets</option>
						</select>
					</td>
					<td>
					</td>
					<td>
						<input type="textbox" id="txtFromDate" class="textboxcenter" maxlength="10" size="10" onkeypress="dateFltrClicked_106510309 ()" />
						<img src="../../../resource/images/default/info/date.gif" class="cursor" onclick="du_openDatePicker (txtFromDate)" />
					</td>
					<td>
					</td>
					<td>
						<input type="textbox" id="txtToDate" class="textboxcenter" maxlength="10" size="10" onkeypress="dateFltrClicked_106510309 ()" />
						<img src="../../../resource/images/default/info/date.gif" class="cursor" onclick="dateClicked_106510309 ()" />
					</td>
					<td>
					</td>
					<td>
						<table class="fieldtitle" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td id="tdShowBookies" width="100">
									<font class="boldlink" onclick="lblShowClicked_BO_106510309 ()" title="Click here to show Bookies">Show Bookies</font>
								</td>
								<td id="tdHideBookies" style="display:none;" width="100">
									<font class="more_filters" onclick="lblHideClicked_BO_106510309 ()" title="Click here to Hide Bookies">Hide Bookies</font>
								</td>
								<td width="5">
								</td>
								<td width="20">
									<input type="checkBox" id="chkPTBetsOption" class="checkbox" />
								</td>
								<td width="85">
									<font class="fieldtitle" style="cursor:pointer;" title="Tick here to check PT Bets" onclick="lblPtBetsOptionClicked_106510309 ()">Show PT Bets</font>
								</td>
								<td align="right" width="75">
									<input type="button" id="btnShow" class="button" value="Show" onclick="showClicked_106510309 ()" />
								</td>
							</tr>
						</table>
					</td>									
                    <td>
                    </td>					
                </tr>
            </table>
        </td>
    </tr>
    <tr height="10">
        <td colspan="2">
        </td>
    </tr>
	<tr>
		<td colspan="2">
			<table class="fieldtitle" align="center" cellpadding="0" cellspacing="0" border="0">
				<tr id="trBetTypeList" style="display:none;">
					<td id="tdBetTypeList" class="border_top_left_bottom_right" valign="top">
						&nbsp;
					</td>
				</tr>
				<tr id="trLeagueList" style="display:none;">
					<td id="tdLeagueList" class="border_top_left_bottom_right" valign="top">
						&nbsp;
					</td>
				</tr>
				<tr id="trBookieList" style="display:none;">
					<td id="tdBookieList" class="border_top_left_bottom_right" valign="top">
						&nbsp;
					</td>
				</tr>
			</table>
		</td>
	</tr>            
</table>
<%@ include file="filters.inc" %>