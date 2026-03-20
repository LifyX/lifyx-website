import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Link } from 'react-router';

type FormData = {
  fullName: string;
  businessName: string;
  email: string;
  website: string;
  projectType: string;
  budget: string;
  details: string;
  botcheck?: string;
};

export function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
    projectType: '',
    budget: '',
    details: '',
    botcheck: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg(null);

  // Honeypot check (spam protection)
  if (formData.botcheck && formData.botcheck.trim().length > 0) {
    setSubmitted(true);
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "28fc5e68-92e0-48f1-8845-eb06e55c2e50",
        subject: "New LifyX Website Inquiry",
        from_name: "LifyX Website",
        fullName: formData.fullName,
        businessName: formData.businessName,
        email: formData.email,
        website: formData.website,
        projectType: formData.projectType,
        budget: formData.budget,
        details: formData.details,

        botcheck: "" // spam trap
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Submission failed");
    }

    setSubmitted(true);

  } catch (error: any) {
    console.error(error);
    setErrorMsg(error.message || "Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-x-hidden py-24 md:py-32"
      style={{ position: 'relative' }}
    >
      {/* Static Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-[1000px] px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative mb-12 md:mb-20 text-center"
        >
          <h1 className="relative z-10 mb-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t('contact.hero.title')}
          </h1>
          <p className="relative z-10 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t('contact.hero.subtitle')}
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/5 bg-card/50 p-6 md:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Hidden honeypot field (should stay empty) */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.fullName')}
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="h-12 border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base focus:border-primary/50 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="businessName"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.businessName')}
                      </Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="h-12 border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base focus:border-primary/50 focus:ring-primary/20"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.email')}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base focus:border-primary/50 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="website"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.website')}
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="h-12 border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base focus:border-primary/50 focus:ring-primary/20"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="projectType"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.projectType')}
                      </Label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="h-12 w-full appearance-none rounded-md border border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="" disabled className="bg-card text-muted-foreground">
                            Select an option
                          </option>
                          <option value="redesign" className="bg-card">
                            {t('contact.form.projectType.redesign')}
                          </option>
                          <option value="new" className="bg-card">
                            {t('contact.form.projectType.new')}
                          </option>
                          <option value="ecommerce" className="bg-card">
                            {t('contact.form.projectType.ecommerce')}
                          </option>
                          <option value="booking" className="bg-card">
                            {t('contact.form.projectType.booking')}
                          </option>
                          <option value="unsure" className="bg-card">
                            {t('contact.form.projectType.unsure')}
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="budget"
                        className="text-sm font-medium text-muted-foreground"
                      >
                        {t('contact.form.budget')}
                      </Label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="h-12 w-full appearance-none rounded-md border border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 text-base text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="" disabled className="bg-card text-muted-foreground">
                            Select a range
                          </option>
                          <option value="range1" className="bg-card">
                            {t('contact.form.budget.range1')}
                          </option>
                          <option value="range2" className="bg-card">
                            {t('contact.form.budget.range2')}
                          </option>
                          <option value="range3" className="bg-card">
                            {t('contact.form.budget.range3')}
                          </option>
                          <option value="discuss" className="bg-card">
                            {t('contact.form.budget.discuss')}
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="details"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      {t('contact.form.details')}
                    </Label>
                    <Textarea
                      id="details"
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      className="min-h-[120px] border-zinc-400 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-base focus:border-primary/50 focus:ring-primary/20"
                      placeholder={t('contact.form.detailsPlaceholder')}
                    />
                  </div>

                  {errorMsg ? (
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  ) : null}

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 md:h-14 w-full bg-primary text-lg font-semibold text-white hover:bg-primary/90 hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                    </Button>

                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      {t('contact.form.privacy')}
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">{t('contact.success.title')}</h2>
                  <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                    {t('contact.success.message')}
                  </p>
                  <Button
                    onClick={() => (window.location.href = '/')}
                    variant="outline"
                    className="h-12 border-zinc-400 dark:border-white/10 bg-white/5 px-8 hover:bg-white/10 hover:text-white"
                  >
                    {t('contact.success.button')}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* FAQ Section Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{t('contact.faq.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('contact.faq.checkOut')}</p>

          <Button asChild variant="outline" className="h-12 px-8 border-zinc-400 dark:border-white/10 hover:bg-white/5">
            <Link to="/faq" className="group flex items-center gap-2">
              {t('contact.faq.visitPage')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}