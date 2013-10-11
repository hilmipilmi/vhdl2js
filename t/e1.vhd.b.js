files = [{
    fn: "e1.vhd",
    lines: [
        [],
        [{
            id: 0,
            txt: "library "
        }, {
            id: 1,
            txt: "ieee"
        }, {
            id: 2,
            txt: ";"
        }],
        [{
            id: 3,
            txt: "use "
        }, {
            id: 4,
            txt: "ieee"
        }, {
            id: 5,
            txt: "."
        }, {
            id: 6,
            txt: "std_logic_1164"
        }, {
            id: 7,
            txt: "."
        }, {
            id: 8,
            txt: "all"
        }, {
            id: 9,
            txt: ";"
        }],
        [],
        [{
            id: 10,
            txt: "entity "
        }, {
            id: 11,
            txt: "e1 "
        }, {
            id: 12,
            txt: "is"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 13,
            txt: "generic "
        }, {
            id: 14,
            txt: "("
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 15,
            txt: "gcnt      "
        }, {
            id: 16,
            txt: ": "
        }, {
            id: 17,
            txt: "integer "
        }, {
            id: 18,
            txt: "range "
        }, {
            id: 19,
            txt: "1 "
        }, {
            id: 20,
            txt: "to "
        }, {
            id: 21,
            txt: "4  "
        }, {
            id: 22,
            txt: ":= "
        }, {
            id: 23,
            txt: "1"
        }, {
            id: 24,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 25,
            txt: "glen      "
        }, {
            id: 26,
            txt: ": "
        }, {
            id: 27,
            txt: "integer "
        }, {
            id: 28,
            txt: "range "
        }, {
            id: 29,
            txt: "0 "
        }, {
            id: 30,
            txt: "to "
        }, {
            id: 31,
            txt: "31  "
        }, {
            id: 32,
            txt: ":= "
        }, {
            id: 33,
            txt: "0"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 34,
            txt: ")"
        }, {
            id: 35,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 36,
            txt: "port "
        }, {
            id: 37,
            txt: "("
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 38,
            txt: "clk "
        }, {
            id: 39,
            txt: ": "
        }, {
            id: 40,
            txt: "in "
        }, {
            id: 41,
            txt: "std_logic"
        }, {
            id: 42,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 43,
            txt: "rst "
        }, {
            id: 44,
            txt: ": "
        }, {
            id: 45,
            txt: "in "
        }, {
            id: 46,
            txt: "std_logic"
        }, {
            id: 47,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 48,
            txt: "in0 "
        }, {
            id: 49,
            txt: ": "
        }, {
            id: 50,
            txt: "in "
        }, {
            id: 51,
            txt: "std_logic_vector"
        }, {
            id: 52,
            txt: "("
        }, {
            id: 53,
            txt: "glen "
        }, {
            id: 54,
            txt: "downto "
        }, {
            id: 55,
            txt: "0"
        }, {
            id: 56,
            txt: ")"
        }, {
            id: 57,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 58,
            txt: "out0 "
        }, {
            id: 59,
            txt: ": "
        }, {
            id: 60,
            txt: "out "
        }, {
            id: 61,
            txt: "std_logic_vector"
        }, {
            id: 62,
            txt: "("
        }, {
            id: 63,
            txt: "glen "
        }, {
            id: 64,
            txt: "downto "
        }, {
            id: 65,
            txt: "0"
        }, {
            id: 66,
            txt: ")"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 67,
            txt: ")"
        }, {
            id: 68,
            txt: ";"
        }],
        [{
            id: 69,
            txt: "end"
        }, {
            id: 70,
            txt: ";"
        }],
        [],
        [{
            id: 71,
            txt: "architecture "
        }, {
            id: 72,
            txt: "rtl "
        }, {
            id: 73,
            txt: "of "
        }, {
            id: 74,
            txt: "e1 "
        }, {
            id: 75,
            txt: "is"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 76,
            txt: "signal "
        }, {
            id: 77,
            txt: "s0"
        }, {
            id: 78,
            txt: ","
        }, {
            id: 79,
            txt: "s1 "
        }, {
            id: 80,
            txt: ": "
        }, {
            id: 81,
            txt: "std_logic"
        }, {
            id: 82,
            txt: ";"
        }],
        [{
            id: 83,
            txt: "begin"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 84,
            txt: "s1 "
        }, {
            id: 85,
            txt: "<= "
        }, {
            id: 86,
            txt: "s0 "
        }, {
            id: 87,
            txt: "after "
        }, {
            id: 88,
            txt: "2 "
        }, {
            id: 89,
            txt: "ns"
        }, {
            id: 90,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 91,
            txt: "p0 "
        }, {
            id: 92,
            txt: ": "
        }, {
            id: 93,
            txt: "process"
        }, {
            id: 94,
            txt: "("
        }, {
            id: 95,
            txt: "rst"
        }, {
            id: 96,
            txt: ", "
        }, {
            id: 97,
            txt: "in0"
        }, {
            id: 98,
            txt: ")"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 99,
            txt: "variable "
        }, {
            id: 100,
            txt: "v0"
        }, {
            id: 101,
            txt: ", "
        }, {
            id: 102,
            txt: "v1 "
        }, {
            id: 103,
            txt: ": "
        }, {
            id: 104,
            txt: "std_logic"
        }, {
            id: 105,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 106,
            txt: "begin"
        }],
        [{
            id: -1,
            txt: "    "
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 107,
            txt: "v1 "
        }, {
            id: 108,
            txt: ":= "
        }, {
            id: 109,
            txt: "'0'"
        }, {
            id: 110,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 111,
            txt: "v0 "
        }, {
            id: 112,
            txt: ":= "
        }, {
            id: 113,
            txt: "'0'"
        }, {
            id: 114,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 115,
            txt: "if "
        }, {
            id: 116,
            txt: "("
        }, {
            id: 117,
            txt: "in0"
        }, {
            id: 118,
            txt: "("
        }, {
            id: 119,
            txt: "0"
        }, {
            id: 120,
            txt: ") "
        }, {
            id: 121,
            txt: "= "
        }, {
            id: 122,
            txt: "'0'"
        }, {
            id: 123,
            txt: ") "
        }, {
            id: 124,
            txt: "then"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 125,
            txt: "if "
        }, {
            id: 126,
            txt: "("
        }, {
            id: 127,
            txt: "in0"
        }, {
            id: 128,
            txt: "("
        }, {
            id: 129,
            txt: "1"
        }, {
            id: 130,
            txt: ") "
        }, {
            id: 131,
            txt: "= "
        }, {
            id: 132,
            txt: "'0'"
        }, {
            id: 133,
            txt: ") "
        }, {
            id: 134,
            txt: "then"
        }],
        [{
            id: -1,
            txt: "        "
        }, {
            id: 135,
            txt: "v0 "
        }, {
            id: 136,
            txt: ":= "
        }, {
            id: 137,
            txt: "'0'"
        }, {
            id: 138,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 139,
            txt: "end "
        }, {
            id: 140,
            txt: "if"
        }, {
            id: 141,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 142,
            txt: "v0 "
        }, {
            id: 143,
            txt: ":= "
        }, {
            id: 144,
            txt: "'1'"
        }, {
            id: 145,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 146,
            txt: "else"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 147,
            txt: "v0 "
        }, {
            id: 148,
            txt: ":= "
        }, {
            id: 149,
            txt: "'0'"
        }, {
            id: 150,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 151,
            txt: "end "
        }, {
            id: 152,
            txt: "if"
        }, {
            id: 153,
            txt: ";"
        }],
        [],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 154,
            txt: "if "
        }, {
            id: 155,
            txt: "("
        }, {
            id: 156,
            txt: "in0"
        }, {
            id: 157,
            txt: "("
        }, {
            id: 158,
            txt: "2"
        }, {
            id: 159,
            txt: ") "
        }, {
            id: 160,
            txt: "= "
        }, {
            id: 161,
            txt: "'0'"
        }, {
            id: 162,
            txt: ") "
        }, {
            id: 163,
            txt: "then"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 164,
            txt: "if "
        }, {
            id: 165,
            txt: "("
        }, {
            id: 166,
            txt: "in0"
        }, {
            id: 167,
            txt: "("
        }, {
            id: 168,
            txt: "3"
        }, {
            id: 169,
            txt: ") "
        }, {
            id: 170,
            txt: "= "
        }, {
            id: 171,
            txt: "'0'"
        }, {
            id: 172,
            txt: ") "
        }, {
            id: 173,
            txt: "then"
        }],
        [{
            id: -1,
            txt: "        "
        }, {
            id: 174,
            txt: "v1 "
        }, {
            id: 175,
            txt: ":= "
        }, {
            id: 176,
            txt: "'0'"
        }, {
            id: 177,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 178,
            txt: "end "
        }, {
            id: 179,
            txt: "if"
        }, {
            id: 180,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 181,
            txt: "v1 "
        }, {
            id: 182,
            txt: ":= "
        }, {
            id: 183,
            txt: "'1'"
        }, {
            id: 184,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 185,
            txt: "else"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 186,
            txt: "v1 "
        }, {
            id: 187,
            txt: ":= "
        }, {
            id: 188,
            txt: "'0'"
        }, {
            id: 189,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 190,
            txt: "end "
        }, {
            id: 191,
            txt: "if"
        }, {
            id: 192,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 193,
            txt: "out0"
        }, {
            id: 194,
            txt: "("
        }, {
            id: 195,
            txt: "0"
        }, {
            id: 196,
            txt: ") "
        }, {
            id: 197,
            txt: "<= "
        }, {
            id: 198,
            txt: "v0"
        }, {
            id: 199,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 200,
            txt: "out0"
        }, {
            id: 201,
            txt: "("
        }, {
            id: 202,
            txt: "1"
        }, {
            id: 203,
            txt: ") "
        }, {
            id: 204,
            txt: "<= "
        }, {
            id: 205,
            txt: "v1"
        }, {
            id: 206,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 207,
            txt: "end "
        }, {
            id: 208,
            txt: "process"
        }, {
            id: 209,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }],
        [{
            id: 210,
            txt: "end"
        }, {
            id: 211,
            txt: ";"
        }],
        [],
        [{
            id: 212,
            txt: "library "
        }, {
            id: 213,
            txt: "ieee"
        }, {
            id: 214,
            txt: ";"
        }],
        [{
            id: 215,
            txt: "use "
        }, {
            id: 216,
            txt: "ieee"
        }, {
            id: 217,
            txt: "."
        }, {
            id: 218,
            txt: "std_logic_1164"
        }, {
            id: 219,
            txt: "."
        }, {
            id: 220,
            txt: "all"
        }, {
            id: 221,
            txt: ";"
        }],
        [],
        [{
            id: 222,
            txt: "package "
        }, {
            id: 223,
            txt: "libe1 "
        }, {
            id: 224,
            txt: "is"
        }],
        [],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 225,
            txt: "component "
        }, {
            id: 226,
            txt: "e1 "
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 227,
            txt: "generic "
        }, {
            id: 228,
            txt: "("
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 229,
            txt: "gcnt      "
        }, {
            id: 230,
            txt: ": "
        }, {
            id: 231,
            txt: "integer "
        }, {
            id: 232,
            txt: "range "
        }, {
            id: 233,
            txt: "1 "
        }, {
            id: 234,
            txt: "to "
        }, {
            id: 235,
            txt: "4  "
        }, {
            id: 236,
            txt: ":= "
        }, {
            id: 237,
            txt: "1"
        }, {
            id: 238,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 239,
            txt: "glen      "
        }, {
            id: 240,
            txt: ": "
        }, {
            id: 241,
            txt: "integer "
        }, {
            id: 242,
            txt: "range "
        }, {
            id: 243,
            txt: "0 "
        }, {
            id: 244,
            txt: "to "
        }, {
            id: 245,
            txt: "31  "
        }, {
            id: 246,
            txt: ":= "
        }, {
            id: 247,
            txt: "0"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 248,
            txt: ")"
        }, {
            id: 249,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "    "
        }, {
            id: 250,
            txt: "port "
        }, {
            id: 251,
            txt: "("
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 252,
            txt: "clk "
        }, {
            id: 253,
            txt: ": "
        }, {
            id: 254,
            txt: "in "
        }, {
            id: 255,
            txt: "std_logic"
        }, {
            id: 256,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 257,
            txt: "rst "
        }, {
            id: 258,
            txt: ": "
        }, {
            id: 259,
            txt: "in "
        }, {
            id: 260,
            txt: "std_logic"
        }, {
            id: 261,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 262,
            txt: "in0 "
        }, {
            id: 263,
            txt: ": "
        }, {
            id: 264,
            txt: "in "
        }, {
            id: 265,
            txt: "std_logic_vector"
        }, {
            id: 266,
            txt: "("
        }, {
            id: 267,
            txt: "glen "
        }, {
            id: 268,
            txt: "downto "
        }, {
            id: 269,
            txt: "0"
        }, {
            id: 270,
            txt: ")"
        }, {
            id: 271,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 272,
            txt: "out0 "
        }, {
            id: 273,
            txt: ": "
        }, {
            id: 274,
            txt: "out "
        }, {
            id: 275,
            txt: "std_logic_vector"
        }, {
            id: 276,
            txt: "("
        }, {
            id: 277,
            txt: "glen "
        }, {
            id: 278,
            txt: "downto "
        }, {
            id: 279,
            txt: "0"
        }, {
            id: 280,
            txt: ")"
        }],
        [{
            id: -1,
            txt: "      "
        }, {
            id: 281,
            txt: ")"
        }, {
            id: 282,
            txt: ";"
        }],
        [{
            id: -1,
            txt: "  "
        }, {
            id: 283,
            txt: "end "
        }, {
            id: 284,
            txt: "component"
        }, {
            id: 285,
            txt: ";"
        }],
        [],
        [{
            id: 286,
            txt: "end"
        }, {
            id: 287,
            txt: ";"
        }]
    ]
}];
/* entity e1 */

function _t_entity_e1(_p, _n, _g, _port) {
    hdl.obj(this, _p, _n);
    /* generic */
    this._gen = {
        decls: [{
            type: GENERIC,
            name: "gcnt",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "1",
                        loc: "19"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "4",
                        loc: "21"
                    }
                },
                loc: "17"
            },
            init: {
                type: INTLITERAL,
                value: "1",
                loc: "23"
            },
            loc: "15"
        }, {
            type: GENERIC,
            name: "glen",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "0",
                        loc: "29"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "31",
                        loc: "31"
                    }
                },
                loc: "27"
            },
            init: {
                type: INTLITERAL,
                value: "0",
                loc: "33"
            },
            loc: "25"
        }]
    };
    /* port */
    this._prt = {
        decls: [{
            type: GENERIC,
            name: "gcnt",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "1",
                        loc: "19"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "4",
                        loc: "21"
                    }
                },
                loc: "17"
            },
            init: {
                type: INTLITERAL,
                value: "1",
                loc: "23"
            },
            loc: "15"
        }, {
            type: GENERIC,
            name: "glen",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "0",
                        loc: "29"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "31",
                        loc: "31"
                    }
                },
                loc: "27"
            },
            init: {
                type: INTLITERAL,
                value: "0",
                loc: "33"
            },
            loc: "25"
        }]
    };

    this.elaborate = function() {}
}

/* architecture rtl of e1 */

function _t_arch_e1(_p, _n, _g, _port) {
    hdl.obj(this, _p, _n);
    /* generic */
    this._gen = {
        decls: [{
            type: GENERIC,
            name: "gcnt",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "1",
                        loc: "19"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "4",
                        loc: "21"
                    }
                },
                loc: "17"
            },
            init: {
                type: INTLITERAL,
                value: "1",
                loc: "23"
            },
            loc: "15"
        }, {
            type: GENERIC,
            name: "glen",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "0",
                        loc: "29"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "31",
                        loc: "31"
                    }
                },
                loc: "27"
            },
            init: {
                type: INTLITERAL,
                value: "0",
                loc: "33"
            },
            loc: "25"
        }]
    };
    /* port */
    this._prt = {
        decls: [{
            type: GENERIC,
            name: "gcnt",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "1",
                        loc: "19"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "4",
                        loc: "21"
                    }
                },
                loc: "17"
            },
            init: {
                type: INTLITERAL,
                value: "1",
                loc: "23"
            },
            loc: "15"
        }, {
            type: GENERIC,
            name: "glen",
            mode: "in ",
            typedef: {
                type: INTEGERSUBTYPE,
                range: {
                    type: RANGEEXPRESSION,
                    left: {
                        type: INTLITERAL,
                        value: "0",
                        loc: "29"
                    },
                    right: {
                        type: INTLITERAL,
                        value: "31",
                        loc: "31"
                    }
                },
                loc: "27"
            },
            init: {
                type: INTLITERAL,
                value: "0",
                loc: "33"
            },
            loc: "25"
        }]
    };

    /* types */
    this._typ = [{
        decls: []
    }];
    /* subs */
    this._sub = [{
        decls: []
    }];
    /* signals */
    this._ssig = [{
        decls: [{
            type: SIGNAL,
            name: "s0",
            typdef: {
                type: TYPEENUM,
                name: "std_logic"
            },
            loc: "77"
        }, {
            type: SIGNAL,
            name: "s1",
            typdef: {
                type: TYPEENUM,
                name: "std_logic"
            },
            loc: "79"
        }]
    }];
    /* processes */
    this._prc = [ /* process process p0(arch rtl of e1) */
        function _t_(_p, _n, _g, _port) {
            hdl.obj(this, _p, _n);
            this._seq = {
                type: BLOCKSTATEMENT,
                body: [{
                    type: ASSIGNMENTEXPRESSIONVAR,
                    left: {
                        type: IDENTIFIER,
                        phase: 'name',
                        value: "v1",
                        loc: "107"
                    },
                    right: {
                        type: ENUMLITERAL,
                        value: "'0'",
                        loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                    },
                    loc: "107"
                }, {
                    type: ASSIGNMENTEXPRESSIONVAR,
                    left: {
                        type: IDENTIFIER,
                        phase: 'name',
                        value: "v0",
                        loc: "111"
                    },
                    right: {
                        type: ENUMLITERAL,
                        value: "'0'",
                        loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                    },
                    loc: "111"
                }, {
                    type: IFSTATEMENT,
                    test: {
                        type: BINARYEXPRESSION,
                        operator: EQ,
                        left: {
                            type: INDEXEXPRESSION,
                            object: {
                                type: IDENTIFIER,
                                phase: 'sig',
                                value: "in0",
                                loc: "48"
                            },
                            indexes: [{
                                type: INTLITERAL,
                                value: "0",
                                loc: "119"
                            }],
                            loc: "118"
                        },
                        right: {
                            type: ENUMLITERAL,
                            value: "'0'",
                            loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                        },
                        loc: "121"
                    },
                    consequence: {
                        type: BLOCKSTATEMENT,
                        body: [{
                            type: IFSTATEMENT,
                            test: {
                                type: BINARYEXPRESSION,
                                operator: EQ,
                                left: {
                                    type: INDEXEXPRESSION,
                                    object: {
                                        type: IDENTIFIER,
                                        phase: 'sig',
                                        value: "in0",
                                        loc: "48"
                                    },
                                    indexes: [{
                                        type: INTLITERAL,
                                        value: "1",
                                        loc: "129"
                                    }],
                                    loc: "128"
                                },
                                right: {
                                    type: ENUMLITERAL,
                                    value: "'0'",
                                    loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                                },
                                loc: "131"
                            },
                            consequence: {
                                type: BLOCKSTATEMENT,
                                body: [{
                                    type: ASSIGNMENTEXPRESSIONVAR,
                                    left: {
                                        type: IDENTIFIER,
                                        phase: 'name',
                                        value: "v0",
                                        loc: "135"
                                    },
                                    right: {
                                        type: ENUMLITERAL,
                                        value: "'0'",
                                        loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                                    },
                                    loc: "135"
                                }],
                                loc: "135"
                            }
                        }, {
                            type: ASSIGNMENTEXPRESSIONVAR,
                            left: {
                                type: IDENTIFIER,
                                phase: 'name',
                                value: "v0",
                                loc: "142"
                            },
                            right: {
                                type: ENUMLITERAL,
                                value: "'1'",
                                loc: "../../../../libraries/ieee/std_logic_1164.v93:44:26"
                            },
                            loc: "142"
                        }],
                        loc: "125"
                    },
                    alternate: {
                        type: BLOCKSTATEMENT,
                        body: [{
                            type: ASSIGNMENTEXPRESSIONVAR,
                            left: {
                                type: IDENTIFIER,
                                phase: 'name',
                                value: "v0",
                                loc: "147"
                            },
                            right: {
                                type: ENUMLITERAL,
                                value: "'0'",
                                loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                            },
                            loc: "147"
                        }],
                        loc: "147"
                    }
                }, {
                    type: IFSTATEMENT,
                    test: {
                        type: BINARYEXPRESSION,
                        operator: EQ,
                        left: {
                            type: INDEXEXPRESSION,
                            object: {
                                type: IDENTIFIER,
                                phase: 'sig',
                                value: "in0",
                                loc: "48"
                            },
                            indexes: [{
                                type: INTLITERAL,
                                value: "2",
                                loc: "158"
                            }],
                            loc: "157"
                        },
                        right: {
                            type: ENUMLITERAL,
                            value: "'0'",
                            loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                        },
                        loc: "160"
                    },
                    consequence: {
                        type: BLOCKSTATEMENT,
                        body: [{
                            type: IFSTATEMENT,
                            test: {
                                type: BINARYEXPRESSION,
                                operator: EQ,
                                left: {
                                    type: INDEXEXPRESSION,
                                    object: {
                                        type: IDENTIFIER,
                                        phase: 'sig',
                                        value: "in0",
                                        loc: "48"
                                    },
                                    indexes: [{
                                        type: INTLITERAL,
                                        value: "3",
                                        loc: "168"
                                    }],
                                    loc: "167"
                                },
                                right: {
                                    type: ENUMLITERAL,
                                    value: "'0'",
                                    loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                                },
                                loc: "170"
                            },
                            consequence: {
                                type: BLOCKSTATEMENT,
                                body: [{
                                    type: ASSIGNMENTEXPRESSIONVAR,
                                    left: {
                                        type: IDENTIFIER,
                                        phase: 'name',
                                        value: "v1",
                                        loc: "174"
                                    },
                                    right: {
                                        type: ENUMLITERAL,
                                        value: "'0'",
                                        loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                                    },
                                    loc: "174"
                                }],
                                loc: "174"
                            }
                        }, {
                            type: ASSIGNMENTEXPRESSIONVAR,
                            left: {
                                type: IDENTIFIER,
                                phase: 'name',
                                value: "v1",
                                loc: "181"
                            },
                            right: {
                                type: ENUMLITERAL,
                                value: "'1'",
                                loc: "../../../../libraries/ieee/std_logic_1164.v93:44:26"
                            },
                            loc: "181"
                        }],
                        loc: "164"
                    },
                    alternate: {
                        type: BLOCKSTATEMENT,
                        body: [{
                            type: ASSIGNMENTEXPRESSIONVAR,
                            left: {
                                type: IDENTIFIER,
                                phase: 'name',
                                value: "v1",
                                loc: "186"
                            },
                            right: {
                                type: ENUMLITERAL,
                                value: "'0'",
                                loc: "../../../../libraries/ieee/std_logic_1164.v93:43:26"
                            },
                            loc: "186"
                        }],
                        loc: "186"
                    }
                }, {
                    type: ASSIGNMENTEXPRESSIONSIG,
                    left: {
                        type: INDEXEXPRESSION,
                        object: {
                            type: IDENTIFIER,
                            phase: 'sig',
                            value: "out0",
                            loc: "58"
                        },
                        indexes: [{
                            type: INTLITERAL,
                            value: "0",
                            loc: "195"
                        }],
                        loc: "194"
                    },
                    right: [{
                        type: WAVEFORM,
                        elem: {
                            type: IDENTIFIER,
                            phase: 'name',
                            value: "v0",
                            loc: "198"
                        }
                    }],
                    loc: "193"
                }, {
                    type: ASSIGNMENTEXPRESSIONSIG,
                    left: {
                        type: INDEXEXPRESSION,
                        object: {
                            type: IDENTIFIER,
                            phase: 'sig',
                            value: "out0",
                            loc: "58"
                        },
                        indexes: [{
                            type: INTLITERAL,
                            value: "1",
                            loc: "202"
                        }],
                        loc: "201"
                    },
                    right: [{
                        type: WAVEFORM,
                        elem: {
                            type: IDENTIFIER,
                            phase: 'name',
                            value: "v1",
                            loc: "205"
                        }
                    }],
                    loc: "200"
                }],
                loc: "107"
            };
            this.elaborate = function() {}
        }
    ];
    /* conc */
    this._con = [{
        u: "undeftyp: Hdl::Stmt::ConcAssign::Sig=HASH(0x7fde82a4d2d0)"
    }];

    this.elaborate = function() {}
}
/* Package decl libe1 */
/* package decl libe1 */

function _t_pdecl_(_p, _n, _g, _port) {
    _pdecl_d = {
        decls: [{
            type: COMPONENT,
            generics: [{
                type: GENERIC,
                name: "gcnt",
                mode: "in ",
                typedef: {
                    type: INTEGERSUBTYPE,
                    range: {
                        type: RANGEEXPRESSION,
                        left: {
                            type: INTLITERAL,
                            value: "1",
                            loc: "233"
                        },
                        right: {
                            type: INTLITERAL,
                            value: "4",
                            loc: "235"
                        }
                    },
                    loc: "231"
                },
                init: {
                    type: INTLITERAL,
                    value: "1",
                    loc: "237"
                },
                loc: "229"
            }, {
                type: GENERIC,
                name: "glen",
                mode: "in ",
                typedef: {
                    type: INTEGERSUBTYPE,
                    range: {
                        type: RANGEEXPRESSION,
                        left: {
                            type: INTLITERAL,
                            value: "0",
                            loc: "243"
                        },
                        right: {
                            type: INTLITERAL,
                            value: "31",
                            loc: "245"
                        }
                    },
                    loc: "241"
                },
                init: {
                    type: INTLITERAL,
                    value: "0",
                    loc: "247"
                },
                loc: "239"
            }],
            ports: [{
                type: GENERIC,
                name: "gcnt",
                mode: "in ",
                typedef: {
                    type: INTEGERSUBTYPE,
                    range: {
                        type: RANGEEXPRESSION,
                        left: {
                            type: INTLITERAL,
                            value: "1",
                            loc: "233"
                        },
                        right: {
                            type: INTLITERAL,
                            value: "4",
                            loc: "235"
                        }
                    },
                    loc: "231"
                },
                init: {
                    type: INTLITERAL,
                    value: "1",
                    loc: "237"
                },
                loc: "229"
            }, {
                type: GENERIC,
                name: "glen",
                mode: "in ",
                typedef: {
                    type: INTEGERSUBTYPE,
                    range: {
                        type: RANGEEXPRESSION,
                        left: {
                            type: INTLITERAL,
                            value: "0",
                            loc: "243"
                        },
                        right: {
                            type: INTLITERAL,
                            value: "31",
                            loc: "245"
                        }
                    },
                    loc: "241"
                },
                init: {
                    type: INTLITERAL,
                    value: "0",
                    loc: "247"
                },
                loc: "239"
            }]
        }]
    };
    this.elaborate = function() {}
}
