/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package prova21;

/**
 *
 * @author felipe
 */
public class CalcularIMC {
    public static double calcularIMC(double peso, double altura) {
        if (altura <= 0 || peso <= 0) {
            return -1.0; 
        }
        
        return peso / (altura * altura);
    }

    public static String classificarIMC(double imc, String sexo) {
        if (sexo.equalsIgnoreCase("mulher")) {
            return classificarIMCMulher(imc);
        } else if (sexo.equalsIgnoreCase("homem")) {
            return classificarIMCHomem(imc);
        } else {
            return "Sexo inválido";
        }
    }

    private static String classificarIMCMulher(double imc) {
        if (imc < 19.1) {
            return "Abaixo do Peso";
        } else if (imc >= 19.1 && imc <= 25.8) {
            return "No Peso Normal";
        } else if (imc > 25.8 && imc <= 27.3) {
            return "Marginalmente Acima do Peso";
        } else if (imc > 27.3 && imc <= 32.3) {
            return "Acima do Peso Ideal";
        } else {
            return "Obeso";
        }
    }

    private static String classificarIMCHomem(double imc) {
        if (imc < 20.7) {
            return "Abaixo do Peso";
        } else if (imc >= 20.7 && imc <= 26.4) {
            return "No Peso Normal";
        } else if (imc > 26.4 && imc <= 27.8) {
            return "Marginalmente Acima do Peso";
        } else if (imc > 27.8 && imc <= 31.1) {
            return "Acima do Peso Ideal";
        } else {
            return "Obeso";
        }
    }
}

    

