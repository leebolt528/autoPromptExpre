var dataSource = {
    "field": [
        "fl_article_from",
        "fl_board_name",
        "fl_content",
        "fl_fetch_time",
        "当前选中"
    ],
    "fieldop": {
        "fl_article_from": [
            "=",
            "!=",
            "is"
        ],
        "fl_board_name": [
            "=",
            "!=",
            "is"
        ],
        "fl_content": [
            "=",
            "!=",
            ">",
            ">=",
            "<",
            "<=",
            "is"
        ]
    },
    "valuemap": {
        "fl_article_from#=": "contentop1",
        "fl_article_from#!=": "contentop1",
        "fl_article_from#is": "contentop2",
        "fl_board_name#=": "contentop3",
        "fl_board_name#!=": "contentop3",
        "fl_board_name#is": "contentop2",
        "fl_content#~": "contentop4",
        "fl_content#!~": "contentop4",
        "fl_content#is": "contentop2",
        "fl_fetch_time#=": "contentop4",
        "fl_fetch_time#!=": "contentop4",
        "fl_fetch_time#>": "contentop4",
        "fl_fetch_time#>=": "contentop4",
        "fl_fetch_time#<": "contentop4",
        "fl_fetch_time#<=": "contentop4",
        "fl_fetch_time#is": "contentop2"
    },
    "values": {
        "contentop1": {
            "type": "value",
            "data": [
                "新华网"
            ]
        },
        "contentop2": {
            "type": "value",
            "data": [
                "Empty"
            ]
        },
        "contentop3": {
            "type": "value",
            "data": [
                "新华地方"
            ]
        },
        "contentop4": {
            "type": "http"
        }
    }
}