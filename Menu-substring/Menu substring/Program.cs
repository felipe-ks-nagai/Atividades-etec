using System;
using static System.Console;
using System.Threading;
namespace MENU
{
    class Program
    {
        static void Main()
        {
            Clear();
            WriteLine("=========================================================\n" +
                "MENU SELEÇÃO\n[1]Ordem de nomes;\n[2]Conta Letras;\n[3]Zenit Polar\n[4]Desliza letras\n[5]Inverte frase\n[6]Letreiro\n[7]Iniciais em maiúsculas;\n[8]Fim.\n" +
                "=========================================================");
            WriteLine("Digite um número para escolher uma das atividades: ");
            string opcstring = ReadLine();
            int opcint = Convert.ToInt32(opcstring);
            switch (opcint)
            {
                case 1:
                    {
                        Ordem();
                        break;
                    }
                case 2:
                    {
                        Conta_Letras();
                        break;
                    }
                case 3:
                    {
                        Zenit_Polar();
                        break;
                    }
                case 4:
                    {
                        Desliza_Letras();
                        break;
                    }
                case 5:
                    {
                        Inverte_Frase();
                        break;
                    }
                case 6:
                    {
                        Letreiro();
                        break;
                    }
                case 7:
                    {
                        IniciaisMaiusculas();
                        break;
                    }
                case 8:
                    {
                        WriteLine("Obrigado por usar nosso programa. :)");
                        break;
                    }
                default:
                    {
                        WriteLine("Você digitou um caractere que não é possível aqui. Retornando ao início");
                        Thread.Sleep(5000);
                        break;
                    }
            }

        }
        static void Ordem()
        {
            string opc;
            do
            {
                string listanomes;
                Clear();
                WriteLine("Escreva uma lista de nomes, separados por vírgulas (,) ");
                listanomes = ReadLine();
                string[] nomes = listanomes.Split(',');
                int tamanho = nomes.Length;
                for (int i1 = 0; i1 < tamanho - 1; i1++)
                {
                    for (int i2 = 0; i2 < tamanho - i1 - 1; i2++)
                    {
                        if (nomes[i2].CompareTo(nomes[i2 + 1]) >= 1)
                        {
                            var aux = nomes[i2];
                            nomes[i2] = nomes[i2 + 1];
                            nomes[i2 + 1] = aux;
                        }
                    }
                }
                Array.Sort(nomes);
                foreach (string nome in nomes)
                {
                    WriteLine(nome);
                }
                WriteLine("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();
        }
        static void Conta_Letras()
        {
            string opc;
            do
            {
                string frase, vletra;
                int vTam, contA = 0, contE = 0, contI = 0, contO = 0, contU = 0, contSpace = 0, contCon = 0;
                Clear();
                WriteLine("Digite uma frase: ");
                frase = ReadLine();
                vTam = frase.Length;
                for (int i = 0; i < frase.Length; i++)
                {
                    vletra = frase.Substring(i, 1);
                    switch (vletra.ToLower())
                    {
                        case "a":
                            {
                                contA++;
                                break;
                            }
                        case "e":
                            {
                                contE++;
                                break;
                            }
                        case "i":
                            {
                                contI++;
                                break;
                            }
                        case "o":
                            {
                                contO++;
                                break;
                            }
                        case "u":
                            {
                                contU++;
                                break;
                            }
                        case " ":
                            {
                                contSpace++;
                                break;
                            }
                        default:
                            break;
                    }
                }
                contCon = vTam - contSpace - contA - contE - contI - contO - contU;
                WriteLine($"A frase contém {vTam} caracteres");
                WriteLine($"A frase contém: \n{contA} A;\n{contE} E;\n{contI} I;\n{contO} O;\n{contU} U");
                WriteLine($"A frase contém {contCon} Consoantes");
                WriteLine("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();
        }
        static void Zenit_Polar()
        {
            string opc;
            do
            {
                string frase, vLetra, frasefinal = " ";
                int vTam, I;

                Clear();
                WriteLine("Digite uma frase: ");
                frase = ReadLine();
                vTam = frase.Length;
                for (I = 0; I < vTam; I++)
                {
                    vLetra = frase.Substring(I, 1);
                    switch (vLetra.ToLower())
                    {
                        case "z":
                            {
                                frasefinal += "p";
                                break;
                            }
                        case "p":
                            {
                                frasefinal += "z";
                                break;
                            }
                        case "e":
                            {
                                frasefinal += "o";
                                break;
                            }
                        case "o":
                            {
                                frasefinal += "e";
                                break;
                            }
                        case "n":
                            {
                                frasefinal += "l";
                                break;
                            }
                        case "l":
                            {
                                frasefinal += "n";
                                break;
                            }
                        case "i":
                            {
                                frasefinal += "a";
                                break;
                            }
                        case "a":
                            {
                                frasefinal += "i";
                                break;
                            }
                        case "r":
                            {
                                frasefinal += "t";
                                break;
                            }
                        case "t":
                            {
                                frasefinal += "r";
                                break;
                            }
                        case "u":
                        case "x":
                        case "y":
                        case "b":
                        case "c":
                        case "d":
                        case "f":
                        case "g":
                        case "h":
                        case "j":
                        case "k":
                        case "m":
                        case "q":
                        case "s":
                        case "v":
                        case "w":
                        case " ":
                            {
                                frasefinal += vLetra;
                                break;
                            }
                    }

                }
                WriteLine(frasefinal);
                WriteLine("Você deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();
        }
        static void Desliza_Letras()
        {
            string opc;
            do
            {
                Clear();
                string vLetra;
                int vTam, i;
                int num = 0;
                int num1 = 1;
                int num4 = 0;
                int num2 = 0;
                int num3 = 0;
                WriteLine("Digite uma frase: ");
                int aux = num1;
                string frase = ReadLine();
                vTam = frase.Length;
                SetCursorPosition(10, 10);
                Write('[');
                SetCursorPosition(11, 10);
                string frasefinal = new string('.', vTam + 2);
                Write(frasefinal + "]");
                num2 = vTam;
                for (i = 0; i < vTam; i++)
                {
                    SetCursorPosition(10 + vTam + 1, 10);
                    string substring = frase.Substring(i, 1);
                    Write(substring);
                    num2 = vTam;
                    num2 += 1;
                    num1 = 1;
                    for (int i2 = 0; i2 < vTam - num4; i2++)
                    {
                        SetCursorPosition(10 + num2 + num3, 10);
                        Thread.Sleep(200);
                        Write(".");
                        SetCursorPosition(10 + num2 - num1, 10);
                        Write(substring);
                        num1 += 1;
                        num3 += -1;
                        Thread.Sleep(200);
                    }
                    num4 += 1;
                    num2 = 0;
                    num1 = 0;
                    num3 = 0;
                    aux += 1;
                }
                SetCursorPosition(10 + vTam + 1, 10);
                Write("..]");
                SetCursorPosition(0, 3);
                Write("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();
        }
        static void Inverte_Frase()
        {

            string opc;
            do
            {
                Clear();
                string frase, vletra, frasefinal = " ";
                int vTam, i;
                WriteLine("Digite uma frase: ");
                frase = ReadLine();
                vTam = frase.Length;
                for (i = vTam - 1; i > -1; i--)
                {
                    vletra = frase.Substring(i, 1);
                    frasefinal += vletra;
                }
                WriteLine(frasefinal);
                WriteLine("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();

        }
        static void Letreiro()
        {
            string opc;
            do
            {
                Clear();
                WriteLine("Digite uma frase: ");
                string frase = ReadLine();
                int tamanho2 = frase.Length;
                string frasefinal = new string(' ', 3 * frase.Length) + frase;
                SetCursorPosition(10, 10);
                Write('[' + frasefinal + " ]");
                for (int I = 0; I < 100; I++)
                {
                    SetCursorPosition(12, 10);
                    frasefinal = frasefinal.Substring(1) + frasefinal.Substring(0, 1);
                    Write(frasefinal);
                    Thread.Sleep(100);
                }
                Write("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();
        }
        static void IniciaisMaiusculas()
        {
            string opc;
            do
            {
                int contagem = -1;
                string nomefinal = "";
                string nome1 = "";
                WriteLine("Digite um nome: ");
                string frase = ReadLine();

                string[] nome = frase.Split(' ');

                for (int i = 0; i < nome.Length; i++)
                {
                    nome1 = "";
                    nome1 += nome[contagem += 1];
                    nome1 = nome1.ToLower();
                    switch (nome1)
                    {
                        case "das":
                        case "de":
                        case "da":
                        case "do":
                        case "dos":
                        case "e":
                            nomefinal += nome1 + " ";
                            break;
                        default:
                            {
                                nomefinal += char.ToUpper(nome1[0]) + nome1.Substring(1) + " ";
                                break;
                            }
                    }
                }
                Write(nomefinal);
                WriteLine("Deseja continuar? (S/N)");
                opc = ReadLine();
            } while (opc == "S");
            WriteLine("Ok. Retornando em 3 segundos");
            Thread.Sleep(3000);
            Main();

        }
    }

}
