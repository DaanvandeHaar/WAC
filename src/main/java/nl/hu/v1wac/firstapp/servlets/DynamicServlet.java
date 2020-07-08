package nl.hu.v1wac.firstapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/DynamicServlet.do")
public class DynamicServlet extends HttpServlet {
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException, NullPointerException  {
			int getal_3 = 0;
			String teken = null;
			String action = req.getParameter("keer");
			System.out.println(action);
			int getal_1 = Integer.parseInt(req.getParameter("getal_1"));
			int getal_2 = Integer.parseInt(req.getParameter("getal_2"));
			
			if (req.getParameter("keer") != null) {
				if (req.getParameter("keer").contentEquals("*")) {
					getal_3 = getal_1 * getal_2; teken = "*";
					}
				}
			
			if (req.getParameter("plus") != null) {
				if (req.getParameter("plus").contentEquals("+")) {
					getal_3 = getal_1 + getal_2; teken = "+";
					}
				}
			
			if (req.getParameter("min") != null) {
				if (req.getParameter("min").contentEquals("-")) {
					getal_3 = getal_1 - getal_2; teken = "-";
					}
				}
			
			if (req.getParameter("delen") != null) {
				if (req.getParameter("delen").contentEquals("/")) {
					getal_3 = getal_1 / getal_2; teken = "/";
					}
				}

			
			PrintWriter out = resp.getWriter();
			resp.setContentType("text/html");
			out.println("<!DOCTYPE html>");
			out.println("<html>");
			out.println("  <title>Dynamic Example</title>");
			out.println("  <body>");
			out.println("    <h2>Het antwoord op: " + getal_1 + " " + teken + " " + getal_2 +  "!</h2>");
			out.println("    <h2>Is " + getal_3 + "</h2>");
			out.println("  </body>");
			out.println("</html>");

	}
}
