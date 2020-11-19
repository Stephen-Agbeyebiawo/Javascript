/**
 * RunScript: JavaScript runscript is used to run script.
 * You should return message object
 * The input arguments of the script is message.
 */
/*var timeNow = new Date()
var hourString = timeNow.getHours().toString()
if (hourString.length < 2) {
    var hour = '0' + hourString
} else {
    var hour = hourString
}*/

var datas = []
var sub_impact
var impact_hour = ''
var traffic_factor
var impact_count = 0
var gsm_impact_count = 0
var umts_impact_count = 0
var lte_impact_count = 0
var impact_list = ''
var gsm
var umts
var lte
var total
var list
var tql_query_word
var hour

var processCRTqltqlQuery = getProcessCRTqltqlQuery()
var processCRDetailtqlQuery = getGantttqlQuery(processCRTqltqlQuery)
var processResultstqlQuery = processCRDetailtqlQuery.results

var processCRTqlhour = getProcessCRTqlhour()
var processCRDetailhour = getGantthour(processCRTqlhour)
var processResultshour = processCRDetailhour.results

var processCRTql = getProcessCRTql()
var processCRDetail = getGantt(processCRTql)
var processResults = processCRDetail.results

var processCRTqlTotalCount = getProcessCRTqlTotalCount()
var processCRDetailTotalCount = getGanttTotalCount(processCRTqlTotalCount)
var processResultsTotalCount = processCRDetailTotalCount.results

var processCRTqlGSMCount = getProcessCRTqlGSMCount()
var processCRDetailGSMCount = getGanttGSMCount(processCRTqlGSMCount)
var processResultsGSMCount = processCRDetailGSMCount.results

var processCRTqlUMTSCount = getProcessCRTqlUMTSCount()
var processCRDetailUMTSCount = getGanttUMTSCount(processCRTqlUMTSCount)
var processResultsUMTSCount = processCRDetailUMTSCount.results

var processCRTqlLTECount = getProcessCRTqlLTECount()
var processCRDetailLTECount = getGanttLTECount(processCRTqlLTECount)
var processResultsLTECount = processCRDetailLTECount.results

var processCRTqlImpactList = getProcessCRTqlImpactList()
var processCRDetailImpactList = getGanttImpactList(processCRTqlImpactList)
var processResultsImpactList = processCRDetailImpactList.results

// Push values from data model to result array

if (processResultshour.length > 0) {
  data_hour = {
    impact_hour: processResultshour[0].impact_hour
  }
  datas.push(data_hour)
  hour = processResultshour[0].impact_hour
}

if (processResultstqlQuery.length > 0) {
  data_tql_query = {
    tql_query: processResultstqlQuery[0].tql_query
  }
  datas.push(data_tql_query)
  tql_query_word = processResultstqlQuery[0].tql_query
}

if (processResultsTotalCount.length > 0) {
  data_total_count = {
    impact_count: processResultsTotalCount[0].impact_count
  }
  datas.push(data_total_count)
  total = processResultsTotalCount[0].impact_count
}

if (processResultsGSMCount.length > 0) {
  data_gsm_count = {
    gsm_impact_count: processResultsGSMCount[0].gsm_impact_count
  }
  datas.push(data_gsm_count)
  gsm = processResultsGSMCount[0].gsm_impact_count
}

if (processResultsUMTSCount.length > 0) {
  data_umts_count = {
    umts_impact_count: processResultsUMTSCount[0].umts_impact_count
  }
  datas.push(data_umts_count)
  umts = processResultsUMTSCount[0].umts_impact_count
}

if (processResultsLTECount.length > 0) {
  data_lte_count = {
    lte_impact_count: processResultsLTECount[0].lte_impact_count
  }
  datas.push(data_lte_count)
  lte = processResultsLTECount[0].lte_impact_count
}

if (processResultsImpactList.length > 0) {
  data_impact_list = {
    impact_list: processResultsImpactList[0].impact_list
  }
  datas.push(data_impact_list)
  list = processResultsImpactList[0].impact_list
}

// Calculating traffic factor

if (hour == '00') {
  traffic_factor = 0.036999637
}

if (hour == '01') {
  traffic_factor = 0.013422438
}

if (hour == '02') {
  traffic_factor = 0.007635926
}

if (hour == '03') {
  traffic_factor = 0.007749387
}

if (hour == '04') {
  traffic_factor = 0.017507035
}

if (hour == '05') {
  traffic_factor = 0.06798584
}

if (hour == '06') {
  traffic_factor = 0.220511483
}

if (hour == '07') {
  traffic_factor = 0.351797222
}

if (hour == '08') {
  traffic_factor = 0.406678316
}

if (hour == '09') {
  traffic_factor = 0.407926387
}

if (hour == '10') {
  traffic_factor = 0.387083598
}

if (hour == '11') {
  traffic_factor = 0.35727739
}

if (hour == '12') {
  traffic_factor = 0.338760552
}

if (hour == '13') {
  traffic_factor = 0.334619225
}

if (hour == '14') {
  traffic_factor = 0.340178815
}

if (hour == '15') {
  traffic_factor = 0.337149406
}

if (hour == '16') {
  traffic_factor = 0.288701552
}

if (hour == '17') {
  traffic_factor = 0.276799492
}

if (hour == '18') {
  traffic_factor = 0.463261324
}

if (hour == '19') {
  traffic_factor = 0.623990197
}
if (hour == '20') {
  traffic_factor = 0.75
}
if (hour == '21') {
  traffic_factor = 0.665414813
}

if (hour == '22') {
  traffic_factor = 0.36562812
}

if (hour == '23') {
  traffic_factor = 0.13189843
}

if (processResults.length > 0) {
  data_subscriberimpact_creatett = {
    sub_impact: Math.floor(processResults[0].sub_impact * traffic_factor)
  }
  datas.push(data_subscriberimpact_creatett)
  sub_impact = Math.floor(processResults[0].sub_impact * traffic_factor)
  // getGanttUpdate(sub_impact)
}

getGanttUpdate(sub_impact, gsm, total, list, lte, umts, tql_query_word)

// Function Definitions ------------------------------------------------------------

function getGantttqlQuery (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_Not_Get_tql_Query_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGantthour (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_hour_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGantt (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_Not_Calculate_Sub_Impact.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGanttUpdate (
  sub_impact,
  gsm,
  total,
  list,
  lte,
  umts,
  tql_query_word
) {
  var request = Message()
  var new_sub_impact = sub_impact
  var gsm_impact_count = gsm
  var umts_impact_count = umts
  var lte_impact_count = lte
  var impact_count = total
  var impact_list = list
  var t_query = tql_query_word
  request.header = message.header
  request.body = {
    entry_id: 1,
    gsm_impact_count: gsm_impact_count,
    impact_count: impact_count,
    impact_list: impact_list,
    lte_impact_count: lte_impact_count,
    subscriber_impact: new_sub_impact,
    tql_query: t_query,
    umts_impact_count: umts_impact_count
  }
  var response = CloudServiceAccessor.process(
    'app.service.Vodafone_GH_Estimator.agbey1_temp_table_update',
    request
  )
}

function getGanttTotalCount (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_TotalCount_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGanttGSMCount (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_GSMCount_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGanttUMTSCount (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_UMTSCount_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGanttLTECount (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_LTECount_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}

function getGanttImpactList (tql) {
  var arr = new Array()
  try {
    var request = new Message()
    request.body = {
      tql: [tql].join('')
    }
    var retMsg = CloudServiceAccessor.process(
      'servicecreator.api.baseInstanceService.query',
      request
    )
    var result = retMsg.body.result
    return result
  } catch (e) {
    Could_not_Get_ImpactList_from_temp_Datamodel.error(
      'getCRInfo error, tql = ' + tql + ', errorMessage: ' + e.toString()
    )
  }
  return new Array()
}
// TQL function definitions -------------------------------------------------------------------

function getProcessCRTqltqlQuery () {
  var tql =
    'select tql_query as tql_query from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTqlhour () {
  var tql =
    'select time_hour as impact_hour from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTql () {
  var tql = processResultstqlQuery[0].tql_query
  return tql
}

function getProcessCRTqlTotalCount () {
  var tql =
    'select impact_count as impact_count from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTqlGSMCount () {
  var tql =
    'select gsm_impact_count as gsm_impact_count from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTqlUMTSCount () {
  var tql =
    'select umts_impact_count as umts_impact_count from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTqlLTECount () {
  var tql =
    'select lte_impact_count as lte_impact_count from agbey1_temp_table where entry_id = 1'
  return tql
}

function getProcessCRTqlImpactList () {
  var tql =
    'select impact_list as impact_list from agbey1_temp_table where entry_id = 1'
  return tql
}

message.body.results = datas
return message
