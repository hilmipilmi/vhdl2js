Status: Planning


# vhdl2js

Convert VHDL to Javascript and execute elaboration stage.

vhdl2js is a runtime for VHDL code translated to javascript.
It implements the elaboration stage of VHDL, generating a instance hirarchy tree
and a connection graph for signals. The elaboration stage can be run in a
browser and the output can be used to visualize the VHDL code and implement
various inspection tools.


# Temporary intermediate steps using ghdl: Translation of VHDL to javascript

## vhdl2xml

Subdirectory vhdl2xml contains a patched GHDL (r150,gcc-4.7.2). The --xml switch is added
to GHDL. When given, the GHDL parser's AST will be dumped as XML.

## xml2js

Subdirectory xml2js contains a perl script hdl2js.pl that converts the GHDL XML output to javascript.
hdl2js.pl requires

XML::LibXML,
XML::LibXML::PrettyPrint and
Class::ISA

to be installed
(perl -MCPAN -e "install XML::LibXML; install XML::LibXML::PrettyPrint; install Class::ISA;").

For javascript beautification https://github.com/einars/js-beautify can be used.
