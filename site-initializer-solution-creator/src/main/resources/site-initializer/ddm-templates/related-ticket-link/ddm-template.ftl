<#assign myTicket=""/>
<#assign myID=""/>
<#if (ObjectEntry_objectEntryId.getData())??>
  <#assign myID = ObjectEntry_objectEntryId.getData()/>
  <#assign myTicket = restClient.get("/c/tickets/" + myID)/>
	<#if (myTicket.r_relatedTicket_c_ticketId??) >
	<#assign relatedTicketId = myTicket.r_relatedTicket_c_ticketId />
	${'/web/guest/l/'+relatedTicketId}
  </#if>
</#if>