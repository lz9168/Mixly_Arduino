'use strict';

goog.provide('Blockly.Blocks.display');

goog.require('Blockly.Blocks');


Blockly.Blocks.display.HUE = 180;

Blockly.Blocks.group_lcd_init = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
	this.appendValueInput('device')
        .setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_SETUP)
		.appendField(Blockly.MIXLY_DF_LCD)
		.appendField(new Blockly.FieldDropdown([['1602','16,2'],['2004','20,4']]),'TYPE')
		.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT);
  }
};

Blockly.Blocks.group_lcd_init2 = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
	this.appendValueInput('device')
        .setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_SETUP)
        .appendField(Blockly.MIXLY_DF_LCD)
		.appendField(new Blockly.FieldDropdown([['1602','16,2'],['2004','20,4']]),'TYPE')
		.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.appendValueInput("PIN1")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('sclPin#');
    this.appendValueInput("PIN2")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('sdaPin#')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT2);
  }
};

Blockly.Blocks.group_lcd_init3 = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput("PIN1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_SETUP)
            .appendField(Blockly.MIXLY_DF_LCD)
            .appendField(new Blockly.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
            .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('rs');
        this.appendValueInput("PIN2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('en')
        this.appendValueInput("PIN3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('d1');
        this.appendValueInput("PIN4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('d2')
        this.appendValueInput("PIN5")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('d3');
        this.appendValueInput("PIN6")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('d4')

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT3);
    }
};

Blockly.Blocks.group_lcd_print = {
  init: function() {
      this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_DF_LCD)
		.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
	/*
	this.appendValueInput("TEXT3", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT3);
	this.appendValueInput("TEXT4", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT4);
	*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT);
  }
};

Blockly.Blocks.group_lcd_print2 = {
  init: function() {
      this.setColour(Blockly.Blocks.display.HUE);
	this.appendValueInput("row", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_DF_LCD)
		.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ROW);
	this.appendValueInput("column", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
	this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT2.replace('%1',Blockly.Arduino.valueToCode(this, 'row',Blockly.Arduino.ORDER_ATOMIC)).replace('%2',Blockly.Arduino.valueToCode(this, 'column',Blockly.Arduino.ORDER_ATOMIC)));
  }
};

Blockly.Blocks.group_lcd_power = {
  init: function() {
      this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
		.appendField(Blockly.MIXLY_DF_LCD)
		.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "display"], [Blockly.MIXLY_LCD_STAT_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_POWER);
  }
};

Blockly.Blocks.lp2i_u8g_draw_4strings = {
    init: function() {
        this.appendDummyInput()
            .appendField("OLED 128*64    " + Blockly.Msg.OLEDDISPLAY);
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendValueInput("Text_line1" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line1);		
        this.appendValueInput("Text_line2" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line2);			
        this.appendValueInput("Text_line3" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line3);			
        this.appendValueInput("Text_line4" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line4);			
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.display.HUE);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_OLED_DRAW4STRING);
    }
};
Blockly.Blocks.lp2i_u8g_print = {
    init: function() {
        this.appendDummyInput()
            .appendField("OLED I2C display");
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
        this.appendValueInput("N", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.OLEDDISPLAY);
        this.appendValueInput("X", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.rawx);		
        this.appendValueInput("Y", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.liney);		
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.display.HUE);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_OLED_PRINT.replace('%1',Blockly.Arduino.valueToCode(this, 'X',Blockly.Arduino.ORDER_ATOMIC)).replace('%2',Blockly.Arduino.valueToCode(this, 'Y',Blockly.Arduino.ORDER_ATOMIC)));
    }
};

Blockly.Blocks.lp2i_u8g_4draw_print = {
    init: function() {
        this.appendDummyInput()
            .appendField("OLED I2C display");
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
        this.appendDummyInput()
            .appendField(Blockly.Msg.OLEDDISPLAY);
        this.appendValueInput("Text_line1" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line1);		
        this.appendValueInput("N1", 'Number')	
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.num1);		
        this.appendValueInput("Text_line2" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line2);			
        this.appendValueInput("N2", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.num2);		
        this.appendValueInput("Text_line3" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line3);			
        this.appendValueInput("N3", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.num3);		
        this.appendValueInput("Text_line4" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line4);			
        this.appendValueInput("N4", 'Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.num4);		
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.display.HUE);
        this.setTooltip('');
    }
};
//
//RGB
Blockly.Blocks.display_rgb_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
        this.appendValueInput("PIN", Number)
           .setCheck(Number)
           .setAlign(Blockly.ALIGN_RIGHT)
           .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("LEDCOUNT")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_COUNT);
                  this.appendValueInput("Brightness")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_BRIGHTNESS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks.display_rgb = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendValueInput("RVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_R);
        this.appendValueInput("GVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_G);
        this.appendValueInput("BVALUE")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_B);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
Blockly.Blocks.display_rgb2 = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
        
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
Blockly.Blocks.display_rgb_rainbow1 = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("WAIT")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGBdisplay_rgb_rainbow1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.display_rgb_rainbow2 = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("WAIT")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
             .appendField(Blockly.MIXLY_RGBdisplay_rgb_rainbow2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

var DISPLAY_RAINBOW_TYPE = [
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1, "normal"],
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2, "change"]
];

Blockly.Blocks.display_rgb_rainbow3 = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
              this.appendDummyInput("").appendField(new Blockly.FieldDropdown(DISPLAY_RAINBOW_TYPE), "TYPE");
        this.appendValueInput("rainbow_color")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
             .appendField(Blockly.MIXLY_RGB_display_rgb_rainbow3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
Blockly.Blocks.display_4digitdisplay_power = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY+"_TM1650")
             .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "displayOn"], [Blockly.MIXLY_LCD_STAT_OFF, "displayOff"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.display_4digitdisplay_displayString = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY + "_TM1650")
        this.appendValueInput("VALUE")
//            .setCheck(String)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_DISPLAYSTRING);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.display_4digitdisplay_showDot = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY + "_TM1650")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER1)
            .appendField(new Blockly.FieldDropdown([["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"]]), "NO")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER2)
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_DOT)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_4DIGITDISPLAY_ON, "true"], [Blockly.MIXLY_4DIGITDISPLAY_OFF, "false"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.display_TM1637_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_INIT).appendField("CLK").appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("DIO").appendField(Blockly.MIXLY_PIN);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
          this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
        this.setHelpUrl('');
    }
};

//tm1637æ¸…å±
Blockly.Blocks.display_TM1637_clear = {
    init: function () {
this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
    }
};

Blockly.Blocks.display_TM1637_displyPrint = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput("VALUE").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYPRINT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYSTRING_TIP);
    }
};


Blockly.Blocks.display_TM1637_displayTime = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("").appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYTIME);
        this.appendValueInput("hour").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("").appendField(Blockly.MIXLY_HOUR);
        this.appendValueInput("minute").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("").appendField(Blockly.MIXLY_MINUTE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYTIME_TOOLTIP);
    }
};



Blockly.Blocks.display_TM1637_Brightness = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("").appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_BRIGHTNESS);
        this.appendValueInput("Brightness").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_4DIGITDISPLAY_BRIGHTNESS_TOOLTIP);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOPTIP_4DIGITDISPLAY_TM1637_BRIGHTNESS);
    }
};
Blockly.Blocks.display_Matrix_Init = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_INIT);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#");
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_INIT);
   }
};
Blockly.Blocks.display_TM1637_clearDisplay = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("").appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_CLEARDISPLAY);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_CLEARDISPLAY);
    }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_ç”»ç‚¹å˜é‡
var display_DrawPixel_NUM = [
  [Blockly.MIXLY_4DIGITDISPLAY_ON, "1"],
  [Blockly.MIXLY_4DIGITDISPLAY_OFF, "0"]
];

//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_ç”»ç‚¹æ˜¾ç¤º
Blockly.Blocks.display_Matrix_POS = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput('XVALUE').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_X);
    this.appendValueInput("YVALUE").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_Y);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT).appendField(new Blockly.FieldDropdown(display_DrawPixel_NUM), "DrawPixel_TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_POS);
  }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_æ—‹è½¬å˜é‡
var display_Rotation_NUM = [
  [Blockly.MIXLY_0DEGREE, "0"],
  [Blockly.MIXLY_90DEGREE, "1"],
  [Blockly.MIXLY_180DEGREE, "2"],
  [Blockly.MIXLY_270DEGREE, "3"]
];

//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_æ˜¾ç¤ºæ—‹è½¬
Blockly.Blocks.display_Matrix_Rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_ROTATE).appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_ROTATION);
  }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_å­—ç¬¦æ˜¾ç¤º
Blockly.Blocks.display_Matrix_TEXT={
  init:function(){
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("TEXT", String).setCheck([Number, String]).setAlign(Blockly.ALIGN_RIGHT).appendField(" æ˜¾ç¤º");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_TEXT);
  }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_æ˜¾ç¤ºå›¾æ¡ˆ
Blockly.Blocks.display_Matrix_DisplayChar = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("LEDArray").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
      }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_å›¾æ¡ˆæ•°ç»„
Blockly.Blocks.display_Matrix_LedArray = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
  }
};
//æ‰§è¡Œå™¨_ç‚¹é˜µå±æ˜¾ç¤º_æ¸…é™¤å±å¹•
Blockly.Blocks.display_Matrix_CLEAR = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_CLEAR);
  }
};

//æ˜¾ç¤º-MAX7219-åˆå§‹åŒ?
Blockly.Blocks.MAX7219_init = {
  init: function() {
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_MAX7219_INIT).appendField("DIN").appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("CS").appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("PIN3").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("CLK").appendField(Blockly.MIXLY_PIN);
    this.appendValueInput("Intensity").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_BRIGHTNESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_MAX7219_INIT);
    this.setHelpUrl('');
  }
};

//æ˜¾ç¤º-MAX7219-æ»šåŠ¨å­—ç¬¦ä¸?
Blockly.Blocks.MAX7219_putString = {
  init: function() {
    this.appendValueInput("String", String).setCheck([String, Number]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_MAX7219_PUTSTR);
    this.appendValueInput("Speed").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_SPEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_MAX7219_STRING);
    this.setHelpUrl('');
  }
};

//æ˜¾ç¤º-MAX7219-æ¸…é™¤LEDç‚¹é˜µ
// Blockly.Blocks.Ledcontrol_clearDisplay = {
//   init: function() {
//     this.appendDummyInput().appendField("æ¸…é™¤LEDç‚¹é˜µæ˜¾ç¤º").appendField(new Blockly.FieldTextInput("LC"), "VAR");
//     this.appendValueInput("NUM").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("ç‚¹é˜µæ¨¡å—ç¼–å·ï¼?~8ï¼?);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(Blockly.Blocks.display.HUE);
//     this.setInputsInline(true);
//     this.setTooltip('æ¸…é™¤LEDç‚¹é˜µ(Max7219)æ˜¾ç¤º');
//     this.setHelpUrl('');
//   }
// };
//æ˜¾ç¤º-MAX7219-LEDç‚¹é˜µæ˜¾ç¤ºå›¾æ¡ˆ
Blockly.Blocks.MAX7219_DisplayChar = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.MIXLY_MAX7219_DISPLAYCHAR);
    this.appendValueInput("Chars").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
    this.setHelpUrl('');
  }
};

//æ˜¾ç¤º-max7219ç‚¹é˜µé€‰æ‹©æ•°ç»„
Blockly.Blocks.LedArray = {
  init: function() {
    this.appendDummyInput("").appendField(Blockly.MIXLY_MAX7219_LEDARRAY).appendField(new Blockly.FieldTextInput("LedArray"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.setOutput(true, Number);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT_TOOLTIP);
    this.setHelpUrl('');
  }
};

//显示-MAX7219-LED点阵图案
Blockly.Blocks.Max7219_img = {
  init: function() {
    this.appendDummyInput("").appendField(Blockly.MAKER17_MAX7219_IMG).appendField(new Blockly.FieldDropdown([
      ["↑", "183c7edb18181818"],
      ["↓", "18181818db7e3c18"],
      ["←", "103060ffff603010"],
      ["→", "080c06ffff060c08"],
      ["♥", "42e7ffffff7e3c18"],
      ["▲", "183c7eff00000000"],
      ["▼", "00000000ff7e3c18"],
      ["◄", "103070f0f0703010"],
      ["►", "080c0e0f0f0e0c08"],
      ["△", "182442ff00000000"],
      ["▽", "00000000ff422418"],
      ["☺", "3c42a581a599423c"],
      ["○", "3c4281818181423c"],
      ["◑", "3c4e8f8f8f8f4e3c"],
      ["◐", "3c72f1f1f1f1723c"],
      ["￥", "4224ff08ff080808"],
      ["Χ", "8142241818244281"],
      ["✓", "0000010204885020"],
      ["□", "007e424242427e00"],
      ["▣", "007e425a5a427e00"],
      ["◇", "1824428181422418"],
      ["♀", "3844444438107c10"],
      ["♂", "0f030579d888d870"],
      ["♪", "0c0e0b080878f860"],
      ["✈", "203098ffff983020"],
      ["卍", "00f21212fe90909e"],
      ["卐", "009e9090fe1212f2"],
      ["︱", "1010101010101010"],
      ["—", "000000ff00000000"],
      ["╱", "0102040810204080"],
      ["＼", "8040201008040201"],
      ["大", "1010fe1010284482"],
      ["中", "1010fe9292fe1010"],
      ["小", "1010105454921070"],
      ["米", "00925438fe385492"],
      ["正", "00fe10105e5050fc"],
      ["囧", "ffa5a5c3bda5a5ff"]
    ]), "img_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.display.HUE);
    this.setHelpUrl('');
  }
};

//显示-OLED-变量
var WorH = [
[Blockly.OLED_HEIGHT, 'Height'],
[Blockly.OLED_WIDTH, 'Width']
];

var LINESELECT = [
[Blockly.OLED_HOR, "H"],
[Blockly.OLED_VER, "V"]
];
var FRAMESELECT = [
[Blockly.OLED_HOLLOW, "drawFrame"],
[Blockly.OLED_SOLID, "drawBox"]
];
var CIRCLESELECT = [
[Blockly.OLED_HOLLOW, "drawCircle"],
[Blockly.OLED_SOLID, "drawDisc"]
];
//
var RADSELECT = [
[Blockly.OLED_HOLLOW, "drawRFrame"],
[Blockly.OLED_SOLID, "drawRBox"]
];
//圆选择
var CIRCLEOPTELECT = [
[Blockly.OLED_WHOLE_CICILE, "U8G_DRAW_ALL"],
[Blockly.OLED_UP_R, "U8G_DRAW_UPPER_RIGHT"],
[Blockly.OLED_UP_L, "U8G_DRAW_UPPER_LEFT"],
[Blockly.OLED_LOW_R, "U8G_DRAW_LOWER_RIGHT"],
[Blockly.OLED_LOW_L, "U8G_DRAW_LOWER_LEFT"]
];
//空心、实心椭圆
var ELLIPSESELECT = [
[Blockly.OLED_HOLLOW, "drawEllipse"],
[Blockly.OLED_SOLID, "drawFilledEllipse"]
];

//字体选择
var FONT_TYPE_SELECT = [
["timR14", "timR14_tr"],
["timR08", "timR08_tr"],
["timR18", "timR18_tr"],
["timR24", "timR24_tr"],
["fur11", "fur11_tf"],
["fur14", "fur14_tf"],
["fur17", "fur17_tf"],
["fur20", "fur20_tf"],
["ncenR10", "ncenR10_tf"],
["ncenR12", "ncenR12_tf"],
["ncenR14", "ncenR14_tf"],
["ncenR18", "ncenR18_tf"],
["ncenR24", "ncenR24_tf"]
];

//显示-OLED-初始化2(iic)
Blockly.Blocks.oled_init2 = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_INIT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_INIT2_TOOLTIP);
  }
};
//显示-OLED-清屏幕
Blockly.Blocks.oled_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
   this.appendDummyInput("").appendField(Blockly.OLED_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip();
  }
};
//显示-OLED-获取高度/宽度
Blockly.Blocks.oled_getHeight_or_Width = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);

    this.appendDummyInput("").appendField(Blockly.OLEDGET).appendField(new Blockly.FieldDropdown(WorH), "WHAT");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.OLED_GET_HEIGHT_TOOLTIP);
  }
};

//显示-OLED-图像（汉字）高度选择
var OLED_BITMAP_HEIGHT_SELECT = [
["16", "16"],
["8", "8"],
["24", "24"],
["32", "32"],
["40", "40"],
["48", "48"],
["56", "56"],
["64", "64"]
];

//显示-OLED-图像（汉字）宽度选择
var OLED_BITMAP_WIDTH_SELECT = [
["16", "16"],
["8", "8"],
["24", "24"],
["32", "32"],
["40", "40"],
["48", "48"],
["56", "56"],
["64", "64"],
["72", "72"],
["80", "80"],
["88", "88"],
["96", "96"],
["104", "104"],
["112", "112"],
["120", "120"],
["128", "128"]
];

//显示-oled-定义字模名称和数据
Blockly.Blocks['oled_define_bitmap_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_BITMAP_NAME).appendField(new Blockly.FieldTextInput('bitmap1'), 'VAR').appendField(Blockly.OLED_BITMAP_DATA).appendField(new Blockly.FieldTextInput('0x80,0x00,0x84,0x10,0x88,0x10,0x90,0x08,0x90,0x04,0x80,0x00,0xFE,0x3F,0xC0,0x01, 0xA0,0x02,0xA0,0x02,0x90,0x04,0x88,0x08,0x84,0x10,0x83,0x60,0x80,0x00,0x80,0x00'), 'TEXT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DEF_BMP_DATA_TOOLTIP);
  }
}

//显示-OLED-显示位图（汉字）
Blockly.Blocks.oled_showBitmap = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_POSX).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_POSY).setCheck(Number);
    this.appendDummyInput("").appendField(Blockly.OLED_WIDTH).appendField(new Blockly.FieldDropdown(OLED_BITMAP_WIDTH_SELECT), "WIDTH");
    this.appendDummyInput("").appendField(Blockly.OLED_HEIGHT).appendField(new Blockly.FieldDropdown(OLED_BITMAP_HEIGHT_SELECT), "HEIGHT");
    this.appendValueInput("bitmap_name", String).appendField(Blockly.OLED_BITMAP_NAME).setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_SHOW_BMP_TOOLTIP);
  }
};

//显示-OLED-画点
Blockly.Blocks.oled_drawPixe = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWPIXE);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_POSX).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_POSY).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

//显示-OLED-画线
Blockly.Blocks.oled_drawLine = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWLINE);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("END_X", Number).appendField(Blockly.OLED_END_X).setCheck(Number);
    this.appendValueInput("END_Y", Number).appendField(Blockly.OLED_END_Y).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_LINE_TOOLTIP);
  }
};

//显示-OLED-画直线
Blockly.Blocks.oled_draw_Str_Line = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWSTRLINE);
    this.appendValueInput("START_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("START_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("LENGTH", Number).appendField(Blockly.OLED_LENGTH).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(LINESELECT), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-新建页面
Blockly.Blocks.oled_page = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput().appendField(Blockly.OLED_PAGE);
    this.appendStatementInput('DO').appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_page_tooltip);
  }
};

//显示-OLED-画三角
Blockly.Blocks.oled_drawTriangle = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_TRIANGLE);
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_D0_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_D0_Y).setCheck(Number);
    this.appendValueInput("D1_X", Number).appendField(Blockly.OLED_D1_X).setCheck(Number);
    this.appendValueInput("D1_Y", Number).appendField(Blockly.OLED_D1_Y).setCheck(Number);
    this.appendValueInput("D2_X", Number).appendField(Blockly.OLED_D2_X).setCheck(Number);
    this.appendValueInput("D2_Y", Number).appendField(Blockly.OLED_D2_Y).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

//显示-OLED-画长方形
Blockly.Blocks.oled_drawFrame = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_RECTANGLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(FRAMESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_L_U_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_L_U_Y).setCheck(Number);
    this.appendValueInput("WIDTH", Number).appendField(Blockly.OLED_WIDTH).setCheck(Number);
    this.appendValueInput("HEIGHT", Number).appendField(Blockly.OLED_HEIGHT).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆角矩形
Blockly.Blocks.oled_drawRFrame = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_RAD_RECTANGLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(RADSELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_L_U_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_L_U_Y).setCheck(Number);
    this.appendValueInput("WIDTH", Number).appendField(Blockly.OLED_WIDTH).setCheck(Number);
    this.appendValueInput("HEIGHT", Number).appendField(Blockly.OLED_HEIGHT).setCheck(Number);
    this.appendValueInput("RADIUS", Number).appendField(Blockly.OLED_RADIUS).setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆（空心，实心）
Blockly.Blocks.oled_drawCircle = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_CIRCLE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_CENTER_CIRCLE_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_CENTER_CIRCLE_Y).setCheck(Number);
    this.appendValueInput("RADIUS", Number).appendField(Blockly.OLED_CIRCLE_RADIUS).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画椭圆（空心，实心）
Blockly.Blocks.oled_drawEllipse = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAW_ELLIPSE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(ELLIPSESELECT), "TYPE");
    this.appendValueInput("D0_X", Number).appendField(Blockly.OLED_CENTER_CIRCLE_X).setCheck(Number);
    this.appendValueInput("D0_Y", Number).appendField(Blockly.OLED_CENTER_CIRCLE_Y).setCheck(Number);
    this.appendValueInput("RADIUS_X", Number).appendField(Blockly.OLED_ELLIPSE_RADIUS_X).setCheck(Number);
    this.appendValueInput("RADIUS_Y", Number).appendField(Blockly.OLED_ELLIPSE_RADIUS_Y).setCheck(Number);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_ELLIPSE_TOOLTIP);
  }
};

//显示-OLED-显示字符串
Blockly.Blocks.oled_drawStr = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_DRAWSTR);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("TEXT", String).appendField(Blockly.OLED_STRING).setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-设置字体
Blockly.Blocks.oled_setFont = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_SET_FONT);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(FONT_TYPE_SELECT), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

//显示-OLED-显示字符串
Blockly.Blocks.oled_print = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("").appendField(Blockly.OLED_PRINT_VAR);
    this.appendValueInput("POS_X", Number).appendField(Blockly.OLED_START_X).setCheck(Number);
    this.appendValueInput("POS_Y", Number).appendField(Blockly.OLED_START_Y).setCheck(Number);
    this.appendValueInput("TEXT", String).appendField(Blockly.OLED_STRING).setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

//显示-OLED-显示多行文本
Blockly.Blocks.oled_draw4Str = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.oled_draw4Str);
    this.appendDummyInput().appendField(Blockly.OLED_PRINT);
    this.appendValueInput("Text_line1", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE1);
    this.appendValueInput("Text_line2", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE2);
    this.appendValueInput("Text_line3", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE3);
    this.appendValueInput("Text_line4", 'String').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.OLED_LINE4);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
