import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../../lib/api";
import { getSupabaseClient, isSupabaseConfigured } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");

    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!isSupabaseConfigured) {
      setError("Employee portal is unavailable because Supabase is not configured for this deployment.");
      return;
    }

    const enteredEmail = email.trim().toLowerCase();

    try {
      const response = await apiRequest("/api/login", {
        method: "POST",
        auth: false,
        body: { email: enteredEmail, password },
      });

      const { error: sessionError } = await getSupabaseClient().auth.setSession({
        access_token: response.session.access_token,
        refresh_token: response.session.refresh_token,
      });
      if (sessionError) throw sessionError;

      const isAdmin = response.user.role === "admin";

      localStorage.removeItem("empId");
      localStorage.setItem("userEmail", response.user.email);
      localStorage.setItem("isAdmin", isAdmin ? "1" : "0");

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", enteredEmail);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      setError("");
      navigate(isAdmin ? "/admin-dashboard/" : "/dashboard/");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.message === "Invalid login credentials"
          ? "Invalid email or password"
          : err.message || "Unable to sign in. Check your Supabase setup and try again.",
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-4 py-10 font-jakarta text-slate-900">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] lg:grid-cols-[0.92fr_1fr]">
        <div className="relative hidden min-h-[620px] bg-slate-750 p-10 text-white lg:block">
          <img
            src="/images/Home1.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/82 to-blue-850/70" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to website
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase text-blue-100">
                DBSOL Technologies
              </p>
              <h1 className="mt-4 max-w-sm font-syne text-4xl font-bold leading-tight">
                Secure access for your employee workspace
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200">
                Manage leave requests, profile details, and daily employee
                tasks from one simple portal.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 lg:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to website
          </Link>

          <div className="mb-8">
            <p className="text-sm font-bold uppercase text-blue-700">
              EMP Portal
            </p>
            <h2 className="mt-3 font-syne text-3xl font-bold text-slate-950 sm:text-4xl">
              Welcome back
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign in with your employee or admin credentials to continue.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex w-fit cursor-pointer items-center gap-3 font-semibold text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>

              <Link
                to="/contact-us/"
                className="w-fit font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {error && (
              <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              Login
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

     
        </div>
      </section>
    </main>
  );
}
