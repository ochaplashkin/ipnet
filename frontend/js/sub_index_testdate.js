/*
var date1 = {

  "WhoisRecord": {
    "createdDate": "1997-09-15T00:00:00-0700",
    "updatedDate": "2018-02-21T10:45:07-0800",
    "expiresDate": "2020-09-13T21:00:00-0700",
          "registrant": {
            "organization": "Google LLC",
            "state": "CA",
            "country": "UNITED STATES",
            "countryCode": "US",
            "rawText": "Registrant Organization: Google LLC [...]"
          },
          "administrativeContact": {
            "organization": "Google LLC",
            "state": "CA",
            "country": "UNITED STATES",
            "countryCode": "US",
            "rawText": "Admin Organization: Google LLC [...]"
          },
          "technicalContact": {
            "organization": "Google LLC",
            "state": "CA",
            "country": "UNITED STATES",
            "countryCode": "US",
            "rawText": "Tech Organization: Google LLC [...]"
          },
    "domainName": "google.com",
          "nameServers": {
            "rawText": "ns2.google.com ns3.google.com ns1.google.com ns4.google.com",
            "hostNames": [
              "ns2.google.com",
              "ns3.google.com",
              "ns1.google.com",
              "ns4.google.com"
            ],
            "ips": []
          },
    "status": "clientUpdateProhibited [...]",
    "rawText": "Domain Name: google.com [...]",
    "parseCode": 3579,
    "header": "",
    "strippedText": "Domain Name: google.com [...]",
    "footer": "",
            "audit": {
              "createdDate": "2018-10-23 15:33:41.000 UTC",
              "updatedDate": "2018-10-23 15:33:41.000 UTC"
            },
    "customField1Name": "RegistrarContactEmail",
    "customField1Value": "abusecomplaints@markmonitor.com",
    "registrarName": "MarkMonitor, Inc.",
    "registrarIANAID": "292",
    "whoisServer": "whois.markmonitor.com",
    "createdDateNormalized": "1997-09-15 07:00:00 UTC",
    "updatedDateNormalized": "2018-02-21 18:45:07 UTC",
    "expiresDateNormalized": "2020-09-14 04:00:00 UTC",
    "customField2Name": "RegistrarContactPhone",
    "customField3Name": "RegistrarURL",
    "customField2Value": "+1.2083895740",
    "customField3Value": "http://www.markmonitor.com",
            "registryData": {
              "createdDate": "1997-09-15T04:00:00Z",
              "updatedDate": "2018-02-21T18:36:40Z",
              "expiresDate": "2020-09-14T04:00:00Z",
              "domainName": "google.com",
              "nameServers": {
                "rawText": "NS1.GOOGLE.COM NS2.GOOGLE.COM NS3.GOOGLE.COM NS4.GOOGLE.COM",
                "hostNames": [
                  "NS1.GOOGLE.COM",
                  "NS2.GOOGLE.COM",
                  "NS3.GOOGLE.COM",
                  "NS4.GOOGLE.COM"
                ],
                "ips": []
              },
      "status": "clientDeleteProhibited [...]",
      "rawText": "Domain Name: GOOGLE.COM [...]",
      "parseCode": 251,
      "header": "",
      "strippedText": "Domain Name: GOOGLE.COM [...]",
      "footer": "",
      "audit": {
        "createdDate": "2018-10-23 15:33:40.000 UTC",
        "updatedDate": "2018-10-23 15:33:40.000 UTC"
      },
      "customField1Name": "RegistrarContactEmail",
      "customField1Value": "abusecomplaints@markmonitor.com",
      "registrarName": "MarkMonitor Inc.",
      "registrarIANAID": "292",
      "createdDateNormalized": "1997-09-15 04:00:00 UTC",
      "updatedDateNormalized": "2018-02-21 18:36:40 UTC",
      "expiresDateNormalized": "2020-09-14 04:00:00 UTC",
      "customField2Name": "RegistrarContactPhone",
      "customField3Name": "RegistrarURL",
      "customField2Value": "+1.2083895740",
      "customField3Value": "http://www.markmonitor.com",
      "whoisServer": "whois.markmonitor.com"
    },
    "domainAvailability": "UNAVAILABLE",
    "contactEmail": "abusecomplaints@markmonitor.com",
    "domainNameExt": ".com",
    "estimatedDomainAge": 7708,
    "ips": [
      "172.217.11.174"
    ]
  }
};

 //var keys = Object.keys(date1);
  //console.log( Object.keys(date1.WhoisRecord.registrant)[0]);
 
$("td").eq(0).find(".key").text( Object.keys(date1.WhoisRecord.registrant)[0]+": ")
$("td").eq(0).find(".info").text(date1.WhoisRecord.registrant.organization)
$("td").eq(4).find(".key").text( Object.keys(date1.WhoisRecord.registrant)[1]+": ")
$("td").eq(4).find(".info").text(date1.WhoisRecord.registrant.state)
$("td").eq(8).find(".key").text( Object.keys(date1.WhoisRecord.registrant)[2]+": ")
$("td").eq(8).find(".info").text(date1.WhoisRecord.registrant.country)
$("td").eq(12).find(".key").text( Object.keys(date1.WhoisRecord.registrant)[3]+": ")
$("td").eq(12).find(".info").text(date1.WhoisRecord.registrant.countryCode)
$("td").eq(16).find(".key").text( Object.keys(date1.WhoisRecord)[6]+": ")
$("td").eq(16).find(".info").text(date1.WhoisRecord.domainName)

*/

//document.getElementBóId("save_pic").on(copytext("#text1"));



function copytext(el) { 
  var $tmp = $("<input>"); 
  $("body").append($tmp); 
  $tmp.val($(el).text()).select(); 
  document.execCommand("copy"); 
  $tmp.remove(); 

  $("td #save_pic").attr('src', 'src/saveId.svg');
   setTimeout(function(){ $("td #save_pic").attr('src', 'src/save.png');}, 500);

}

  //Ïðîâåðêà ââåäåííûõ äàííûõ
     
  address =document.getElementById('example');
  letsGo =document.getElementById('test');
  letsGo.onclick = function() {
        validString = address.value;
      if(validString.length >= 7){
      
    document.location = "./sub_index.html?id=" + validString;
    //document.location.replace("sub-index/sub_index.html");
      }
      $('#example').tooltip("show")
      setTimeout( pauseHide,3000);

        function pauseHide(){
      $('#example').tooltip("hide")

     }

  }
