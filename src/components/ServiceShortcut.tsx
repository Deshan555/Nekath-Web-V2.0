import { Card, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface ServiceShortcutProps {
  title: string;
  description: string;
  icon: IconDefinition;
  path: string;
  color?: string;
}

export const ServiceShortcut = ({ title, description, icon, path, color = "var(--gold)" }: ServiceShortcutProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      hoverable 
      className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--panel-border)] p-4 shadow-xl transition-all hover:border-[var(--gold)]/40 group overflow-hidden relative"
      onClick={() => navigate(path)}
    >
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <FontAwesomeIcon icon={icon} className="text-6xl" style={{ color }} />
      </div>
      
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
            <FontAwesomeIcon icon={icon} className="text-lg" />
          </div>
          <h3 className="font-cinzel text-sm text-[var(--text-main)] uppercase tracking-widest">{title}</h3>
        </div>
        <p className="text-[0.65rem] text-[var(--text-dim)] leading-relaxed h-8 overflow-hidden line-clamp-2">
          {description}
        </p>
        <Button 
          type="link" 
          className="p-0 h-auto text-[var(--gold-dim)] group-hover:text-[var(--gold)] flex items-center gap-2 text-[0.6rem] font-cinzel uppercase tracking-widest mt-2"
        >
          Explore Service <FontAwesomeIcon icon={faChevronRight} className="text-[0.5rem]" />
        </Button>
      </div>
    </Card>
  );
};
