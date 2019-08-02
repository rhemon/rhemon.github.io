var count, total, current;
// alert("ready");
$(document).ready(function () {
    // alert("ready");
    var projects = {
        "zultan": {
            "start": 0,
            "end": 13,
            "current": 0
        },
        "ink2design": {
            "start": 0,
            "end": 10,
            "current": 0
        },
        "spark": {
            "start": 0,
            "end": 4,
            "current": 0
        },
        "zealcafe": {
            "start": 0,
            "end": 4,
            "current": 0
        },
        "asa": {
            "start": 0,
            "end": 4,
            "current": 0
        },
        "gow": {
            "start": 0,
            "end": 6,
            "current": 0
        }
    };

    for (each_project in projects) {
        count = projects[each_project]["current"] + 1
        total = projects[each_project]["end"] + 1
        $("#" + each_project + "_imgcount").html(count + " of " + total)
    }

    $(".imgprev").on('click', function () {
        // alert("called")
        project_name = $(this).data("project-name")
        // alert(project_name)
        current = projects[project_name]["current"]
        if (current == projects[project_name]["start"]) {
            current = projects[project_name]["end"];
        } else {
            current = current - 1;
        }

        $("#" + project_name + "_img").attr("src", "media/" + project_name + "_" + current + ".png")
        count = current + 1
        total = projects[project_name]["end"] + 1
        $("#" + project_name + "_imgcount").html(count + " of " + total)
        projects[project_name]["current"] = current;
    });

    $(".imgnext").on('click', function () {
        // alert("called")
        project_name = $(this).data("project-name")
        current = projects[project_name]["current"]
        if (current == projects[project_name]["end"]) {
            current = projects[project_name]["start"];
        } else {
            current = current + 1;
        }
        $("#" + project_name + "_img").attr("src", "media/" + project_name + "_" + current + ".png")
        count = current + 1
        total = projects[project_name]["end"] + 1
        // total = end + 1
        $("#" + project_name + "_imgcount").html(count + " of " + total)
        projects[project_name]["current"] = current;
    });
});