import type { InventoryComponentImage } from "@/types/inventory";

import image_altavoz from "@/assets/components/altavoz.png";
import image_altavoz_con_cable_de_conexion from "@/assets/components/altavoz-con-cable-de-conexion.png";
import image_barra_grafica_de_10_led from "@/assets/components/barra-grafica-de-10-led.png";
import image_bateria_de_9_v from "@/assets/components/bateria-de-9-v.png";
import image_cable_de_audio from "@/assets/components/cable-de-audio.png";
import image_cable_de_camara_de_24_pines_y_15_cm from "@/assets/components/cable-de-camara-de-24-pines-y-15-cm.png";
import image_cable_plano_gpio_de_40_pines from "@/assets/components/cable-plano-gpio-de-40-pines.png";
import image_cable_puente_hembra_hembra from "@/assets/components/cable-puente-hembra-hembra.png";
import image_cable_puente_hembra_macho from "@/assets/components/cable-puente-hembra-macho.png";
import image_cable_puente_macho_macho from "@/assets/components/cable-puente-macho-macho.png";
import image_caja_organizadora_de_plastico from "@/assets/components/caja-organizadora-de-plastico.png";
import image_cinta_de_10_cables_puente_hembra_hembra from "@/assets/components/cinta-de-10-cables-puente-hembra-hembra.png";
import image_cinta_de_10_cables_puente_hembra_macho from "@/assets/components/cinta-de-10-cables-puente-hembra-macho.png";
import image_circuito_integrado_controlador_de_motores_l293d from "@/assets/components/circuito-integrado-controlador-de-motores-l293d.png";
import image_condensador_ceramico_de_0_1_uf from "@/assets/components/condensador-ceramico-de-0-1-uf.png";
import image_condensador_ceramico_marcado_103_0_01_uf from "@/assets/components/condensador-ceramico-marcado-103-0-01-uf.png";
import image_condensador_ceramico_marcado_104_0_1_uf from "@/assets/components/condensador-ceramico-marcado-104-0-1-uf.png";
import image_condensador_electrolitico_de_10_uf from "@/assets/components/condensador-electrolitico-de-10-uf.png";
import image_conector_con_cable_para_bateria_de_9_v from "@/assets/components/conector-con-cable-para-bateria-de-9-v.png";
import image_conjunto_rfid_mfrc522_con_lector_tarjeta_y_llavero from "@/assets/components/conjunto-rfid-mfrc522-con-lector-tarjeta-y-llavero.png";
import image_controlador_de_motores_l293d from "@/assets/components/controlador-de-motores-l293d.png";
import image_convertidor_analogico_digital_mcp3008 from "@/assets/components/convertidor-analogico-digital-mcp3008.png";
import image_diodo_de_conmutacion from "@/assets/components/diodo-de-conmutacion.png";
import image_diodo_rectificador from "@/assets/components/diodo-rectificador.png";
import image_diodo_rectificador_1n4007 from "@/assets/components/diodo-rectificador-1n4007.png";
import image_diodo_zener from "@/assets/components/diodo-zener.png";
import image_fotoresistencia from "@/assets/components/fotoresistencia.png";
import image_helice_para_motor from "@/assets/components/helice-para-motor.png";
import image_interruptor_de_inclinacion from "@/assets/components/interruptor-de-inclinacion.png";
import image_interruptor_de_vibracion from "@/assets/components/interruptor-de-vibracion.png";
import image_interruptor_deslizante from "@/assets/components/interruptor-deslizante.png";
import image_juego_de_65_cables_puente_macho_macho from "@/assets/components/juego-de-65-cables-puente-macho-macho.png";
import image_led_amarillo from "@/assets/components/led-amarillo.png";
import image_led_azul from "@/assets/components/led-azul.png";
import image_led_blanco from "@/assets/components/led-blanco.png";
import image_led_rgb from "@/assets/components/led-rgb.png";
import image_led_rojo from "@/assets/components/led-rojo.png";
import image_led_verde from "@/assets/components/led-verde.png";
import image_matriz_led_8x8 from "@/assets/components/matriz-led-8x8.png";
import image_microinterruptor from "@/assets/components/microinterruptor.png";
import image_minibomba_de_agua_con_manguera from "@/assets/components/minibomba-de-agua-con-manguera.png";
import image_modulo_acelerometro_y_giroscopio_mpu6050 from "@/assets/components/modulo-acelerometro-y-giroscopio-mpu6050.png";
import image_modulo_adaptador_para_esp8266 from "@/assets/components/modulo-adaptador-para-esp8266.png";
import image_modulo_amplificador_de_potencia_de_audio from "@/assets/components/modulo-amplificador-de-potencia-de-audio.png";
import image_modulo_amplificador_para_altavoz from "@/assets/components/modulo-amplificador-para-altavoz.png";
import image_modulo_bluetooth_jdy_31 from "@/assets/components/modulo-bluetooth-jdy-31.png";
import image_modulo_capacitivo_de_humedad_del_suelo from "@/assets/components/modulo-capacitivo-de-humedad-del-suelo.png";
import image_modulo_codificador_rotatorio from "@/assets/components/modulo-codificador-rotatorio.png";
import image_modulo_con_fotoresistencia from "@/assets/components/modulo-con-fotoresistencia.png";
import image_modulo_con_interruptor_magnetico_de_laminas from "@/assets/components/modulo-con-interruptor-magnetico-de-laminas.png";
import image_modulo_con_potenciometro from "@/assets/components/modulo-con-potenciometro.png";
import image_modulo_controlador_de_motores_l9110 from "@/assets/components/modulo-controlador-de-motores-l9110.png";
import image_modulo_convertidor_a_d_y_d_a_pcf8591 from "@/assets/components/modulo-convertidor-a-d-y-d-a-pcf8591.png";
import image_modulo_convertidor_analogico_digital_ads7830 from "@/assets/components/modulo-convertidor-analogico-digital-ads7830.png";
import image_modulo_de_8_led_rgb_direccionables from "@/assets/components/modulo-de-8-led-rgb-direccionables.png";
import image_modulo_de_alimentacion_para_protoboard from "@/assets/components/modulo-de-alimentacion-para-protoboard.png";
import image_modulo_de_camara_csi from "@/assets/components/modulo-de-camara-csi.png";
import image_modulo_de_camara_csi_con_cables_planos from "@/assets/components/modulo-de-camara-csi-con-cables-planos.png";
import image_modulo_de_matriz_de_puntos_led_8x8 from "@/assets/components/modulo-de-matriz-de-puntos-led-8x8.png";
import image_modulo_de_medicion_ultrasonica from "@/assets/components/modulo-de-medicion-ultrasonica.png";
import image_modulo_de_medicion_ultrasonica_hc_sr04 from "@/assets/components/modulo-de-medicion-ultrasonica-hc-sr04.png";
import image_modulo_de_palanca_de_mando from "@/assets/components/modulo-de-palanca-de-mando.png";
import image_modulo_de_palanca_de_mando_con_perilla from "@/assets/components/modulo-de-palanca-de-mando-con-perilla.png";
import image_modulo_de_pantalla_lcd_1602_con_interfaz_i2c from "@/assets/components/modulo-de-pantalla-lcd-1602-con-interfaz-i2c.png";
import image_modulo_de_rele from "@/assets/components/modulo-de-rele.png";
import image_modulo_de_reloj_de_tiempo_real_ds1302 from "@/assets/components/modulo-de-reloj-de-tiempo-real-ds1302.png";
import image_modulo_de_semaforo_led from "@/assets/components/modulo-de-semaforo-led.png";
import image_modulo_de_zumbador_pasivo from "@/assets/components/modulo-de-zumbador-pasivo.png";
import image_modulo_infrarrojo_detector_de_obstaculos from "@/assets/components/modulo-infrarrojo-detector-de-obstaculos.png";
import image_modulo_infrarrojo_para_medicion_de_velocidad from "@/assets/components/modulo-infrarrojo-para-medicion-de-velocidad.png";
import image_modulo_interruptor_de_efecto_hall from "@/assets/components/modulo-interruptor-de-efecto-hall.png";
import image_modulo_led_rgb from "@/assets/components/modulo-led-rgb.png";
import image_modulo_pulsador from "@/assets/components/modulo-pulsador.png";
import image_modulo_sensor_de_distancia_por_tiempo_de_vuelo_vl53l0x from "@/assets/components/modulo-sensor-de-distancia-por-tiempo-de-vuelo-vl53l0x.png";
import image_modulo_sensor_de_efecto_hall from "@/assets/components/modulo-sensor-de-efecto-hall.png";
import image_modulo_sensor_de_gas_y_humo_mq_2 from "@/assets/components/modulo-sensor-de-gas-y-humo-mq-2.png";
import image_modulo_sensor_de_llama from "@/assets/components/modulo-sensor-de-llama.png";
import image_modulo_sensor_de_lluvia from "@/assets/components/modulo-sensor-de-lluvia.png";
import image_modulo_sensor_de_movimiento_mpu6050 from "@/assets/components/modulo-sensor-de-movimiento-mpu6050.png";
import image_modulo_sensor_de_movimiento_pir from "@/assets/components/modulo-sensor-de-movimiento-pir.png";
import image_modulo_sensor_de_nivel_de_agua from "@/assets/components/modulo-sensor-de-nivel-de-agua.png";
import image_modulo_sensor_de_presion_atmosferica_bmp280 from "@/assets/components/modulo-sensor-de-presion-atmosferica-bmp280.png";
import image_modulo_sensor_de_pulso_y_oximetria_max30102 from "@/assets/components/modulo-sensor-de-pulso-y-oximetria-max30102.png";
import image_modulo_sensor_de_sonido_de_alta_sensibilidad from "@/assets/components/modulo-sensor-de-sonido-de-alta-sensibilidad.png";
import image_modulo_sensor_de_temperatura_ds18b20 from "@/assets/components/modulo-sensor-de-temperatura-ds18b20.png";
import image_modulo_sensor_de_temperatura_y_humedad from "@/assets/components/modulo-sensor-de-temperatura-y-humedad.png";
import image_modulo_sensor_de_temperatura_y_humedad_dht11 from "@/assets/components/modulo-sensor-de-temperatura-y-humedad-dht11.png";
import image_modulo_sensor_de_vibracion from "@/assets/components/modulo-sensor-de-vibracion.png";
import image_modulo_sensor_optico_de_velocidad from "@/assets/components/modulo-sensor-optico-de-velocidad.png";
import image_modulo_sensor_tactil_capacitivo from "@/assets/components/modulo-sensor-tactil-capacitivo.png";
import image_modulo_sensor_ultrasonico_hc_sr04 from "@/assets/components/modulo-sensor-ultrasonico-hc-sr04.png";
import image_modulo_transceptor_lora_uart_rylr998_con_antena_integrada from "@/assets/components/modulo-transceptor-lora-uart-rylr998-con-antena-integrada.png";
import image_modulo_wi_fi_esp8266 from "@/assets/components/modulo-wi-fi-esp8266.png";
import image_motor_de_corriente_continua from "@/assets/components/motor-de-corriente-continua.png";
import image_motor_paso_a_paso_28byj_48 from "@/assets/components/motor-paso-a-paso-28byj-48.png";
import image_motorreductor_tt_con_disco_codificador from "@/assets/components/motorreductor-tt-con-disco-codificador.png";
import image_pantalla_lcd_1602_con_interfaz_i2c from "@/assets/components/pantalla-lcd-1602-con-interfaz-i2c.png";
import image_pantalla_oled from "@/assets/components/pantalla-oled.png";
import image_placa_compatible_con_arduino_nano_v3_0_atmega328p_ch340g_y_usb_c from "@/assets/components/placa-compatible-con-arduino-nano-v3-0-atmega328p-ch340g-y-usb-c.png";
import image_placa_controladora_uln2003_para_motor_paso_a_paso from "@/assets/components/placa-controladora-uln2003-para-motor-paso-a-paso.png";
import image_placa_de_desarrollo_compatible_con_esp32_devkitc_32_esp_32d_usb_c_38_pines from "@/assets/components/placa-de-desarrollo-compatible-con-esp32-devkitc-32-esp-32d-usb-c-38-pines.png";
import image_placa_de_expansion_gpio from "@/assets/components/placa-de-expansion-gpio.png";
import image_placa_de_expansion_gpio_en_t from "@/assets/components/placa-de-expansion-gpio-en-t.png";
import image_placa_perforada_de_prototipado from "@/assets/components/placa-perforada-de-prototipado.png";
import image_placa_raspberry_pi_zero_2_w from "@/assets/components/placa-raspberry-pi-zero-2-w.png";
import image_portapilas_para_dos_baterias_aa from "@/assets/components/portapilas-para-dos-baterias-aa.png";
import image_potenciometro from "@/assets/components/potenciometro.png";
import image_protoboard_de_830_puntos from "@/assets/components/protoboard-de-830-puntos.png";
import image_protoboard_de_830_puntos_para_proyectos from "@/assets/components/protoboard-de-830-puntos-para-proyectos.png";
import image_pulsador_grande from "@/assets/components/pulsador-grande.png";
import image_pulsador_tactil from "@/assets/components/pulsador-tactil.png";
import image_registro_de_desplazamiento_74hc595 from "@/assets/components/registro-de-desplazamiento-74hc595.png";
import image_rele from "@/assets/components/rele.png";
import image_rele_de_5_v from "@/assets/components/rele-de-5-v.png";
import image_resistencia_de_1_k_ohm from "@/assets/components/resistencia-de-1-k-ohm.png";
import image_resistencia_de_1_m_ohm from "@/assets/components/resistencia-de-1-m-ohm.png";
import image_resistencia_de_2_k_ohm from "@/assets/components/resistencia-de-2-k-ohm.png";
import image_resistencia_de_5_1_k_ohm from "@/assets/components/resistencia-de-5-1-k-ohm.png";
import image_resistencia_de_10_k_ohm from "@/assets/components/resistencia-de-10-k-ohm.png";
import image_resistencia_de_10_ohm from "@/assets/components/resistencia-de-10-ohm.png";
import image_resistencia_de_100_k_ohm from "@/assets/components/resistencia-de-100-k-ohm.png";
import image_resistencia_de_100_ohm from "@/assets/components/resistencia-de-100-ohm.png";
import image_resistencia_de_220_ohm from "@/assets/components/resistencia-de-220-ohm.png";
import image_resistencia_de_330_ohm from "@/assets/components/resistencia-de-330-ohm.png";
import image_sensor_de_movimiento_pir from "@/assets/components/sensor-de-movimiento-pir.png";
import image_sensor_de_presion_barometrica from "@/assets/components/sensor-de-presion-barometrica.png";
import image_sensor_de_temperatura_y_humedad_dht11 from "@/assets/components/sensor-de-temperatura-y-humedad-dht11.png";
import image_sensor_fotoelectrico_de_ranura_en_u from "@/assets/components/sensor-fotoelectrico-de-ranura-en-u.png";
import image_sensor_infrarrojo_detector_de_obstaculos from "@/assets/components/sensor-infrarrojo-detector-de-obstaculos.png";
import image_servomotor_de_9_g from "@/assets/components/servomotor-de-9-g.png";
import image_servomotor_de_9_g_con_brazos_y_tornillos from "@/assets/components/servomotor-de-9-g-con-brazos-y-tornillos.png";
import image_tapa_amarilla_para_pulsador from "@/assets/components/tapa-amarilla-para-pulsador.png";
import image_tapa_azul_para_pulsador from "@/assets/components/tapa-azul-para-pulsador.png";
import image_tapa_roja_para_pulsador from "@/assets/components/tapa-roja-para-pulsador.png";
import image_tapa_verde_para_pulsador from "@/assets/components/tapa-verde-para-pulsador.png";
import image_tarjeta_de_referencia_del_codigo_de_colores_de_resistencias from "@/assets/components/tarjeta-de-referencia-del-codigo-de-colores-de-resistencias.png";
import image_teclado_matricial_4x4 from "@/assets/components/teclado-matricial-4x4.png";
import image_termistor from "@/assets/components/termistor.png";
import image_tira_de_40_pines_macho from "@/assets/components/tira-de-40-pines-macho.png";
import image_tira_hembra_de_40_contactos from "@/assets/components/tira-hembra-de-40-contactos.png";
import image_transistor_npn from "@/assets/components/transistor-npn.png";
import image_transistor_npn_s8050 from "@/assets/components/transistor-npn-s8050.png";
import image_transistor_pnp from "@/assets/components/transistor-pnp.png";
import image_transistor_pnp_s8550 from "@/assets/components/transistor-pnp-s8550.png";
import image_visualizador_de_7_segmentos_y_4_digitos from "@/assets/components/visualizador-de-7-segmentos-y-4-digitos.png";
import image_visualizador_de_7_segmentos_y_un_digito from "@/assets/components/visualizador-de-7-segmentos-y-un-digito.png";
import image_zumbador_activo from "@/assets/components/zumbador-activo.png";
import image_zumbador_pasivo from "@/assets/components/zumbador-pasivo.png";

const manifest: Record<string, InventoryComponentImage> = {
  "altavoz": { src: image_altavoz, alt: "Altavoz" },
  "altavoz-con-cable-de-conexion": { src: image_altavoz_con_cable_de_conexion, alt: "Altavoz con cable de conexión" },
  "barra-grafica-de-10-led": { src: image_barra_grafica_de_10_led, alt: "Barra gráfica de 10 LED" },
  "bateria-de-9-v": { src: image_bateria_de_9_v, alt: "Batería de 9 V" },
  "cable-de-audio": { src: image_cable_de_audio, alt: "Cable de audio" },
  "cable-de-camara-de-24-pines-y-15-cm": { src: image_cable_de_camara_de_24_pines_y_15_cm, alt: "Cable de cámara de 24 pines y 15 cm" },
  "cable-plano-gpio-de-40-pines": { src: image_cable_plano_gpio_de_40_pines, alt: "Cable plano GPIO de 40 pines" },
  "cable-puente-hembra-hembra": { src: image_cable_puente_hembra_hembra, alt: "Cable puente hembra-hembra" },
  "cable-puente-hembra-macho": { src: image_cable_puente_hembra_macho, alt: "Cable puente hembra-macho" },
  "cable-puente-macho-macho": { src: image_cable_puente_macho_macho, alt: "Cable puente macho-macho" },
  "caja-organizadora-de-plastico": { src: image_caja_organizadora_de_plastico, alt: "Caja organizadora de plástico" },
  "cinta-de-10-cables-puente-hembra-hembra": { src: image_cinta_de_10_cables_puente_hembra_hembra, alt: "Cinta de 10 cables puente hembra-hembra" },
  "cinta-de-10-cables-puente-hembra-macho": { src: image_cinta_de_10_cables_puente_hembra_macho, alt: "Cinta de 10 cables puente hembra-macho" },
  "circuito-integrado-controlador-de-motores-l293d": { src: image_circuito_integrado_controlador_de_motores_l293d, alt: "Circuito integrado controlador de motores L293D" },
  "condensador-ceramico-de-0-1-uf": { src: image_condensador_ceramico_de_0_1_uf, alt: "Condensador cerámico de 0,1 µF" },
  "condensador-ceramico-marcado-103-0-01-uf": { src: image_condensador_ceramico_marcado_103_0_01_uf, alt: "Condensador cerámico marcado 103 (0,01 µF)" },
  "condensador-ceramico-marcado-104-0-1-uf": { src: image_condensador_ceramico_marcado_104_0_1_uf, alt: "Condensador cerámico marcado 104 (0,1 µF)" },
  "condensador-electrolitico-de-10-uf": { src: image_condensador_electrolitico_de_10_uf, alt: "Condensador electrolítico de 10 µF" },
  "conector-con-cable-para-bateria-de-9-v": { src: image_conector_con_cable_para_bateria_de_9_v, alt: "Conector con cable para batería de 9 V" },
  "conjunto-rfid-mfrc522-con-lector-tarjeta-y-llavero": { src: image_conjunto_rfid_mfrc522_con_lector_tarjeta_y_llavero, alt: "Conjunto RFID MFRC522 con lector, tarjeta y llavero" },
  "controlador-de-motores-l293d": { src: image_controlador_de_motores_l293d, alt: "Controlador de motores L293D" },
  "convertidor-analogico-digital-mcp3008": { src: image_convertidor_analogico_digital_mcp3008, alt: "Convertidor analógico-digital MCP3008" },
  "diodo-de-conmutacion": { src: image_diodo_de_conmutacion, alt: "Diodo de conmutación" },
  "diodo-rectificador": { src: image_diodo_rectificador, alt: "Diodo rectificador" },
  "diodo-rectificador-1n4007": { src: image_diodo_rectificador_1n4007, alt: "Diodo rectificador 1N4007" },
  "diodo-zener": { src: image_diodo_zener, alt: "Diodo Zener" },
  "fotoresistencia": { src: image_fotoresistencia, alt: "Fotoresistencia" },
  "helice-para-motor": { src: image_helice_para_motor, alt: "Hélice para motor" },
  "interruptor-de-inclinacion": { src: image_interruptor_de_inclinacion, alt: "Interruptor de inclinación" },
  "interruptor-de-vibracion": { src: image_interruptor_de_vibracion, alt: "Interruptor de vibración" },
  "interruptor-deslizante": { src: image_interruptor_deslizante, alt: "Interruptor deslizante" },
  "juego-de-65-cables-puente-macho-macho": { src: image_juego_de_65_cables_puente_macho_macho, alt: "Juego de 65 cables puente macho-macho" },
  "led-amarillo": { src: image_led_amarillo, alt: "LED amarillo" },
  "led-azul": { src: image_led_azul, alt: "LED azul" },
  "led-blanco": { src: image_led_blanco, alt: "LED blanco" },
  "led-rgb": { src: image_led_rgb, alt: "LED RGB" },
  "led-rojo": { src: image_led_rojo, alt: "LED rojo" },
  "led-verde": { src: image_led_verde, alt: "LED verde" },
  "matriz-led-8x8": { src: image_matriz_led_8x8, alt: "Matriz LED 8×8" },
  "microinterruptor": { src: image_microinterruptor, alt: "Microinterruptor" },
  "minibomba-de-agua-con-manguera": { src: image_minibomba_de_agua_con_manguera, alt: "Minibomba de agua con manguera" },
  "modulo-acelerometro-y-giroscopio-mpu6050": { src: image_modulo_acelerometro_y_giroscopio_mpu6050, alt: "Módulo acelerómetro y giroscopio MPU6050" },
  "modulo-adaptador-para-esp8266": { src: image_modulo_adaptador_para_esp8266, alt: "Módulo adaptador para ESP8266" },
  "modulo-amplificador-de-potencia-de-audio": { src: image_modulo_amplificador_de_potencia_de_audio, alt: "Módulo amplificador de potencia de audio" },
  "modulo-amplificador-para-altavoz": { src: image_modulo_amplificador_para_altavoz, alt: "Módulo amplificador para altavoz" },
  "modulo-bluetooth-jdy-31": { src: image_modulo_bluetooth_jdy_31, alt: "Módulo Bluetooth JDY-31" },
  "modulo-capacitivo-de-humedad-del-suelo": { src: image_modulo_capacitivo_de_humedad_del_suelo, alt: "Módulo capacitivo de humedad del suelo" },
  "modulo-codificador-rotatorio": { src: image_modulo_codificador_rotatorio, alt: "Módulo codificador rotatorio" },
  "modulo-con-fotoresistencia": { src: image_modulo_con_fotoresistencia, alt: "Módulo con fotoresistencia" },
  "modulo-con-interruptor-magnetico-de-laminas": { src: image_modulo_con_interruptor_magnetico_de_laminas, alt: "Módulo con interruptor magnético de láminas" },
  "modulo-con-potenciometro": { src: image_modulo_con_potenciometro, alt: "Módulo con potenciómetro" },
  "modulo-controlador-de-motores-l9110": { src: image_modulo_controlador_de_motores_l9110, alt: "Módulo controlador de motores L9110" },
  "modulo-convertidor-a-d-y-d-a-pcf8591": { src: image_modulo_convertidor_a_d_y_d_a_pcf8591, alt: "Módulo convertidor A/D y D/A PCF8591" },
  "modulo-convertidor-analogico-digital-ads7830": { src: image_modulo_convertidor_analogico_digital_ads7830, alt: "Módulo convertidor analógico-digital ADS7830" },
  "modulo-de-8-led-rgb-direccionables": { src: image_modulo_de_8_led_rgb_direccionables, alt: "Módulo de 8 LED RGB direccionables" },
  "modulo-de-alimentacion-para-protoboard": { src: image_modulo_de_alimentacion_para_protoboard, alt: "Módulo de alimentación para protoboard" },
  "modulo-de-camara-csi": { src: image_modulo_de_camara_csi, alt: "Módulo de cámara CSI" },
  "modulo-de-camara-csi-con-cables-planos": { src: image_modulo_de_camara_csi_con_cables_planos, alt: "Módulo de cámara CSI con cables planos" },
  "modulo-de-matriz-de-puntos-led-8x8": { src: image_modulo_de_matriz_de_puntos_led_8x8, alt: "Módulo de matriz de puntos LED 8×8" },
  "modulo-de-medicion-ultrasonica": { src: image_modulo_de_medicion_ultrasonica, alt: "Módulo de medición ultrasónica" },
  "modulo-de-medicion-ultrasonica-hc-sr04": { src: image_modulo_de_medicion_ultrasonica_hc_sr04, alt: "Módulo de medición ultrasónica HC-SR04" },
  "modulo-de-palanca-de-mando": { src: image_modulo_de_palanca_de_mando, alt: "Módulo de palanca de mando" },
  "modulo-de-palanca-de-mando-con-perilla": { src: image_modulo_de_palanca_de_mando_con_perilla, alt: "Módulo de palanca de mando con perilla" },
  "modulo-de-pantalla-lcd-1602-con-interfaz-i2c": { src: image_modulo_de_pantalla_lcd_1602_con_interfaz_i2c, alt: "Módulo de pantalla LCD 1602 con interfaz I²C" },
  "modulo-de-rele": { src: image_modulo_de_rele, alt: "Módulo de relé" },
  "modulo-de-reloj-de-tiempo-real-ds1302": { src: image_modulo_de_reloj_de_tiempo_real_ds1302, alt: "Módulo de reloj de tiempo real DS1302" },
  "modulo-de-semaforo-led": { src: image_modulo_de_semaforo_led, alt: "Módulo de semáforo LED" },
  "modulo-de-zumbador-pasivo": { src: image_modulo_de_zumbador_pasivo, alt: "Módulo de zumbador pasivo" },
  "modulo-infrarrojo-detector-de-obstaculos": { src: image_modulo_infrarrojo_detector_de_obstaculos, alt: "Módulo infrarrojo detector de obstáculos" },
  "modulo-infrarrojo-para-medicion-de-velocidad": { src: image_modulo_infrarrojo_para_medicion_de_velocidad, alt: "Módulo infrarrojo para medición de velocidad" },
  "modulo-interruptor-de-efecto-hall": { src: image_modulo_interruptor_de_efecto_hall, alt: "Módulo interruptor de efecto Hall" },
  "modulo-led-rgb": { src: image_modulo_led_rgb, alt: "Módulo LED RGB" },
  "modulo-pulsador": { src: image_modulo_pulsador, alt: "Módulo pulsador" },
  "modulo-sensor-de-distancia-por-tiempo-de-vuelo-vl53l0x": { src: image_modulo_sensor_de_distancia_por_tiempo_de_vuelo_vl53l0x, alt: "Módulo sensor de distancia por tiempo de vuelo VL53L0X" },
  "modulo-sensor-de-efecto-hall": { src: image_modulo_sensor_de_efecto_hall, alt: "Módulo sensor de efecto Hall" },
  "modulo-sensor-de-gas-y-humo-mq-2": { src: image_modulo_sensor_de_gas_y_humo_mq_2, alt: "Módulo sensor de gas y humo MQ-2" },
  "modulo-sensor-de-llama": { src: image_modulo_sensor_de_llama, alt: "Módulo sensor de llama" },
  "modulo-sensor-de-lluvia": { src: image_modulo_sensor_de_lluvia, alt: "Módulo sensor de lluvia" },
  "modulo-sensor-de-movimiento-mpu6050": { src: image_modulo_sensor_de_movimiento_mpu6050, alt: "Módulo sensor de movimiento MPU6050" },
  "modulo-sensor-de-movimiento-pir": { src: image_modulo_sensor_de_movimiento_pir, alt: "Módulo sensor de movimiento PIR" },
  "modulo-sensor-de-nivel-de-agua": { src: image_modulo_sensor_de_nivel_de_agua, alt: "Módulo sensor de nivel de agua" },
  "modulo-sensor-de-presion-atmosferica-bmp280": { src: image_modulo_sensor_de_presion_atmosferica_bmp280, alt: "Módulo sensor de presión atmosférica BMP280" },
  "modulo-sensor-de-pulso-y-oximetria-max30102": { src: image_modulo_sensor_de_pulso_y_oximetria_max30102, alt: "Módulo sensor de pulso y oximetría MAX30102" },
  "modulo-sensor-de-sonido-de-alta-sensibilidad": { src: image_modulo_sensor_de_sonido_de_alta_sensibilidad, alt: "Módulo sensor de sonido de alta sensibilidad" },
  "modulo-sensor-de-temperatura-ds18b20": { src: image_modulo_sensor_de_temperatura_ds18b20, alt: "Módulo sensor de temperatura DS18B20" },
  "modulo-sensor-de-temperatura-y-humedad": { src: image_modulo_sensor_de_temperatura_y_humedad, alt: "Módulo sensor de temperatura y humedad" },
  "modulo-sensor-de-temperatura-y-humedad-dht11": { src: image_modulo_sensor_de_temperatura_y_humedad_dht11, alt: "Módulo sensor de temperatura y humedad DHT11" },
  "modulo-sensor-de-vibracion": { src: image_modulo_sensor_de_vibracion, alt: "Módulo sensor de vibración" },
  "modulo-sensor-optico-de-velocidad": { src: image_modulo_sensor_optico_de_velocidad, alt: "Módulo sensor óptico de velocidad" },
  "modulo-sensor-tactil-capacitivo": { src: image_modulo_sensor_tactil_capacitivo, alt: "Módulo sensor táctil capacitivo" },
  "modulo-sensor-ultrasonico-hc-sr04": { src: image_modulo_sensor_ultrasonico_hc_sr04, alt: "Módulo sensor ultrasónico HC-SR04" },
  "modulo-transceptor-lora-uart-rylr998-con-antena-integrada": { src: image_modulo_transceptor_lora_uart_rylr998_con_antena_integrada, alt: "Módulo transceptor LoRa UART RYLR998 con antena integrada" },
  "modulo-wi-fi-esp8266": { src: image_modulo_wi_fi_esp8266, alt: "Módulo Wi-Fi ESP8266" },
  "motor-de-corriente-continua": { src: image_motor_de_corriente_continua, alt: "Motor de corriente continua" },
  "motor-paso-a-paso-28byj-48": { src: image_motor_paso_a_paso_28byj_48, alt: "Motor paso a paso 28BYJ-48" },
  "motorreductor-tt-con-disco-codificador": { src: image_motorreductor_tt_con_disco_codificador, alt: "Motorreductor TT con disco codificador" },
  "pantalla-lcd-1602-con-interfaz-i2c": { src: image_pantalla_lcd_1602_con_interfaz_i2c, alt: "Pantalla LCD 1602 con interfaz I²C" },
  "pantalla-oled": { src: image_pantalla_oled, alt: "Pantalla OLED" },
  "placa-compatible-con-arduino-nano-v3-0-atmega328p-ch340g-y-usb-c": { src: image_placa_compatible_con_arduino_nano_v3_0_atmega328p_ch340g_y_usb_c, alt: "Placa compatible con Arduino Nano V3.0, ATmega328P/CH340G y USB-C" },
  "placa-controladora-uln2003-para-motor-paso-a-paso": { src: image_placa_controladora_uln2003_para_motor_paso_a_paso, alt: "Placa controladora ULN2003 para motor paso a paso" },
  "placa-de-desarrollo-compatible-con-esp32-devkitc-32-esp-32d-usb-c-38-pines": { src: image_placa_de_desarrollo_compatible_con_esp32_devkitc_32_esp_32d_usb_c_38_pines, alt: "Placa de desarrollo compatible con ESP32-DevKitC-32 (ESP-32D, USB-C, 38 pines)" },
  "placa-de-expansion-gpio": { src: image_placa_de_expansion_gpio, alt: "Placa de expansión GPIO" },
  "placa-de-expansion-gpio-en-t": { src: image_placa_de_expansion_gpio_en_t, alt: "Placa de expansión GPIO en T" },
  "placa-perforada-de-prototipado": { src: image_placa_perforada_de_prototipado, alt: "Placa perforada de prototipado" },
  "placa-raspberry-pi-zero-2-w": { src: image_placa_raspberry_pi_zero_2_w, alt: "Placa Raspberry Pi Zero 2 W" },
  "portapilas-para-dos-baterias-aa": { src: image_portapilas_para_dos_baterias_aa, alt: "Portapilas para dos baterías AA" },
  "potenciometro": { src: image_potenciometro, alt: "Potenciómetro" },
  "protoboard-de-830-puntos": { src: image_protoboard_de_830_puntos, alt: "Protoboard de 830 puntos" },
  "protoboard-de-830-puntos-para-proyectos": { src: image_protoboard_de_830_puntos_para_proyectos, alt: "Protoboard de 830 puntos para proyectos" },
  "pulsador-grande": { src: image_pulsador_grande, alt: "Pulsador grande" },
  "pulsador-tactil": { src: image_pulsador_tactil, alt: "Pulsador táctil" },
  "registro-de-desplazamiento-74hc595": { src: image_registro_de_desplazamiento_74hc595, alt: "Registro de desplazamiento 74HC595" },
  "rele": { src: image_rele, alt: "Relé" },
  "rele-de-5-v": { src: image_rele_de_5_v, alt: "Relé de 5 V" },
  "resistencia-de-1-k-ohm": { src: image_resistencia_de_1_k_ohm, alt: "Resistencia de 1 kΩ" },
  "resistencia-de-1-m-ohm": { src: image_resistencia_de_1_m_ohm, alt: "Resistencia de 1 MΩ" },
  "resistencia-de-2-k-ohm": { src: image_resistencia_de_2_k_ohm, alt: "Resistencia de 2 kΩ" },
  "resistencia-de-5-1-k-ohm": { src: image_resistencia_de_5_1_k_ohm, alt: "Resistencia de 5,1 kΩ" },
  "resistencia-de-10-k-ohm": { src: image_resistencia_de_10_k_ohm, alt: "Resistencia de 10 kΩ" },
  "resistencia-de-10-ohm": { src: image_resistencia_de_10_ohm, alt: "Resistencia de 10 Ω" },
  "resistencia-de-100-k-ohm": { src: image_resistencia_de_100_k_ohm, alt: "Resistencia de 100 kΩ" },
  "resistencia-de-100-ohm": { src: image_resistencia_de_100_ohm, alt: "Resistencia de 100 Ω" },
  "resistencia-de-220-ohm": { src: image_resistencia_de_220_ohm, alt: "Resistencia de 220 Ω" },
  "resistencia-de-330-ohm": { src: image_resistencia_de_330_ohm, alt: "Resistencia de 330 Ω" },
  "sensor-de-movimiento-pir": { src: image_sensor_de_movimiento_pir, alt: "Sensor de movimiento PIR" },
  "sensor-de-presion-barometrica": { src: image_sensor_de_presion_barometrica, alt: "Sensor de presión barométrica" },
  "sensor-de-temperatura-y-humedad-dht11": { src: image_sensor_de_temperatura_y_humedad_dht11, alt: "Sensor de temperatura y humedad DHT11" },
  "sensor-fotoelectrico-de-ranura-en-u": { src: image_sensor_fotoelectrico_de_ranura_en_u, alt: "Sensor fotoeléctrico de ranura en U" },
  "sensor-infrarrojo-detector-de-obstaculos": { src: image_sensor_infrarrojo_detector_de_obstaculos, alt: "Sensor infrarrojo detector de obstáculos" },
  "servomotor-de-9-g": { src: image_servomotor_de_9_g, alt: "Servomotor de 9 g" },
  "servomotor-de-9-g-con-brazos-y-tornillos": { src: image_servomotor_de_9_g_con_brazos_y_tornillos, alt: "Servomotor de 9 g con brazos y tornillos" },
  "tapa-amarilla-para-pulsador": { src: image_tapa_amarilla_para_pulsador, alt: "Tapa amarilla para pulsador" },
  "tapa-azul-para-pulsador": { src: image_tapa_azul_para_pulsador, alt: "Tapa azul para pulsador" },
  "tapa-roja-para-pulsador": { src: image_tapa_roja_para_pulsador, alt: "Tapa roja para pulsador" },
  "tapa-verde-para-pulsador": { src: image_tapa_verde_para_pulsador, alt: "Tapa verde para pulsador" },
  "tarjeta-de-referencia-del-codigo-de-colores-de-resistencias": { src: image_tarjeta_de_referencia_del_codigo_de_colores_de_resistencias, alt: "Tarjeta de referencia del código de colores de resistencias" },
  "teclado-matricial-4x4": { src: image_teclado_matricial_4x4, alt: "Teclado matricial 4×4" },
  "termistor": { src: image_termistor, alt: "Termistor" },
  "tira-de-40-pines-macho": { src: image_tira_de_40_pines_macho, alt: "Tira de 40 pines macho" },
  "tira-hembra-de-40-contactos": { src: image_tira_hembra_de_40_contactos, alt: "Tira hembra de 40 contactos" },
  "transistor-npn": { src: image_transistor_npn, alt: "Transistor NPN" },
  "transistor-npn-s8050": { src: image_transistor_npn_s8050, alt: "Transistor NPN S8050" },
  "transistor-pnp": { src: image_transistor_pnp, alt: "Transistor PNP" },
  "transistor-pnp-s8550": { src: image_transistor_pnp_s8550, alt: "Transistor PNP S8550" },
  "visualizador-de-7-segmentos-y-4-digitos": { src: image_visualizador_de_7_segmentos_y_4_digitos, alt: "Visualizador de 7 segmentos y 4 dígitos" },
  "visualizador-de-7-segmentos-y-un-digito": { src: image_visualizador_de_7_segmentos_y_un_digito, alt: "Visualizador de 7 segmentos y un dígito" },
  "zumbador-activo": { src: image_zumbador_activo, alt: "Zumbador activo" },
  "zumbador-pasivo": { src: image_zumbador_pasivo, alt: "Zumbador pasivo" },
};

export function getComponentImage(
  componentId: string,
): InventoryComponentImage | null {
  return manifest[componentId] ?? null;
}
