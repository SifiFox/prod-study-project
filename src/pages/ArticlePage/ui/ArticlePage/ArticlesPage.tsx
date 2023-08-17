import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('Atricles Page')}
        </div>
    );
};
export default memo(ArticlesPage);
