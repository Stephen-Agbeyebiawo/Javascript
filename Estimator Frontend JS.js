Nf.ready(function () {
    console.log("Developed by Stephen Agbeyebiawo (swx462829)")
    if (localStorage.userName === "loaded") {
        // cookie doesn't exist, create it now
        console.log("Page Reloaded")
    }
    else {
        // not first visit, so alert
        localStorage.userName = "loaded"
        console.log("First time Load")
    }
    $E("backend").hide()
    $E("submit").hide()

    S('switch1').setValue("yes")
    S('entry_id').setValue(1)
    S('service_time_block').setVisible(false)
    S('current_time_block').setVisible(true)

    var timeNow = new Date()
    var currentHour = ""
    var currentHourString = timeNow.getHours().toString()
    if (currentHourString.length < 2) {
        currentHour = "0" + currentHourString
    } else {
        currentHour = currentHourString
    }

    S('current_hour').setValue(currentHour)

    Spl.EventBus.register("compute_btn", "click", function () {
        var timeNow = new Date()
        var currentHour = ""
        var currentHourString = timeNow.getHours().toString()
        if (currentHourString.length < 2) {
            currentHour = "0" + currentHourString
        } else {
            currentHour = currentHourString
        }
        //Get hour ---------------------------------------------------------------------
        var hour = ""
        var selectHour = ""
        selectHour = $("#service_time").val()

        if (S('switch1').getValue() == "yes") {
            hour = currentHour
            console.log("currentHour = " + currentHour)
        } else {
            hour = selectHour
            console.log("selectHour = " + selectHour)
        }


        var arrayOfImpact
        var impact_count = 0
        var newarrayOfImpact
        var tqlQuery = ""
        var gsm_impact_count = 0
        var umts_impact_count = 0
        var lte_impact_count = 0
        var impact_list = ""

        //Get sites list ---------------------------------------------------------------
        if ($("#affected_site2").val() == "") {
            //If text field is empty
            console.log("Empty")
        } else {
            //If text field is not empty
            if ($("#affected_site2").val().includes("\n") == false) {
                //If text filed contains one site
                arrayOfImpact = $("#affected_site2").val().toUpperCase()
                impact_count = 1
                console.log(impact_count)
                console.log(arrayOfImpact)

                for (var i = 0; i < impact_count; ++i) {
                    if (arrayOfImpact.includes("3G") || arrayOfImpact.includes("UMTS900"))
                        umts_impact_count++;
                }
                for (var i = 0; i < impact_count; ++i) {
                    if (arrayOfImpact.includes("4G") || arrayOfImpact.includes("CO_BTS"))
                        lte_impact_count++;
                }

                impact_list = $("#affected_site2").val().toUpperCase()

                newarrayOfImpact = "'" + arrayOfImpact + "'"
                console.log("Site string = " + newarrayOfImpact)
                tqlQuery = "select Sum(subs_impact) as sub_impact from agbey1_impact_estimator_table_1 where impact_hour is '" + hour + "' and site_name in (" + newarrayOfImpact + ")"
            } else {
                //If site contains more than one sites
                arrayOfImpact = $("#affected_site2").val().toUpperCase().split('\n').filter(Boolean)
                impact_count = arrayOfImpact.length
                console.log(impact_count)
                console.log(arrayOfImpact)

                for (var i = 0; i < impact_count; ++i) {
                    if (arrayOfImpact[i].includes("3G") || arrayOfImpact[i].includes("UMTS900"))
                        umts_impact_count++;
                }
                for (var i = 0; i < impact_count; ++i) {
                    if (arrayOfImpact[i].includes("4G") || arrayOfImpact[i].includes("CO_BTS"))
                        lte_impact_count++;
                }

                impact_list = $("#affected_site2").val().toUpperCase()

                newarrayOfImpact = arrayOfImpact.join("','").toString()
                tqlQuery = "select Sum(subs_impact) as sub_impact from agbey1_impact_estimator_table_1 where impact_hour is '" + hour + "' and site_name in ('" + newarrayOfImpact + "')"

            }

            //Get sites count per access technology

            gsm_impact_count = impact_count - (umts_impact_count + lte_impact_count)

            //Populate fields before Data model update

            S('impact_count').setValue(impact_count)
            S('gsm_impact_count').setValue(gsm_impact_count)
            S('umts_impact_count').setValue(umts_impact_count)
            S('lte_impact_count').setValue(lte_impact_count)
            S('impact_list').setValue(impact_list)
            S('current_hour').setValue(hour)
            S('tql_query').setValue(tqlQuery)
            S('time_hour').setValue(hour)

            console.log("GSM Site count = " + gsm_impact_count)
            console.log("UMTS Site count = " + umts_impact_count)
            console.log("LTE Site count = " + lte_impact_count)
            console.log("tqlQery = " + tqlQuery)

            $("#submit").click()
            setTimeout(function () {
                $("#backend").click()
            }, 500);
        }

    })
    Spl.EventBus.register("switch1", "ValueChange", function (switch1) {

        console.log("Checked")
        console.log(S('switch1').getValue())
        switch (S('switch1').getValue() == "yes") {
            case true:
                S('service_time_block').setVisible(false);
                S('current_time_block').setVisible(true);
                timeNow = new Date()
                currentHour = ""
                currentHourString = timeNow.getHours().toString()
                if (currentHourString.length < 2) {
                    currentHour = "0" + currentHourString
                } else {
                    currentHour = currentHourString
                }

                S('current_hour').setValue(currentHour)
                break;
            case false:
                S('service_time_block').setVisible(true);
                S('current_time_block').setVisible(false);
                break;
            default:
        }

    })

    Spl.EventBus.register("display_current_time","ValueChange",function(display_current_time){
        console.log("Data field id:" + display_current_time.id);
    })
})
