/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package prova21;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class CalcularIdade {

    private String dataRecebida;

    public CalcularIdade(String dataRecebida) {
        this.dataRecebida = dataRecebida;
    }

    public String calcularIdade() {
        try {
            Date data = new SimpleDateFormat("dd/MM/yyyy").parse(dataRecebida);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(data);

            int mesNascimento = calendar.get(Calendar.MONTH);
            String nomeMes = new SimpleDateFormat("MMMM").format(data);

            Calendar hoje = Calendar.getInstance();
            int idade = hoje.get(Calendar.YEAR) - calendar.get(Calendar.YEAR);

            return "Mês de Nascimento: " + nomeMes + " | " + idade + " anos de idade";
        } catch (ParseException e) {
            return "Formato de data inválido.";
        }
    }

}
